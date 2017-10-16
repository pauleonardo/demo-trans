import uuid from 'uuid';
import moment from 'moment';
import firebase from './firebase';

/*
*
*
*
* CUSTOMER
*
*
*
*
*/

export function createCustomer(data) {
  return firebase.database().ref('customer').push(data).key;
}

export function getListCustomer() {
  return firebase.database().ref('customer').once('value');
}

export function deleteCustomer(id) {
  return firebase.database().ref(`customer/${id}`);
}

export function editCustomer(id, customer) {
  const edit = {};
  edit[`customer/${id}`] = customer;
  firebase.database().ref().update(edit);
}

/*
*
*
*
* ACCOUNT CUSTOMER
*
*
*
*
*/

export function createAccount(id, data) {
  firebase.database().ref(`account/${id}`).set({ monto: data, numeroCuenta: uuid.v4() });
}

export function getAccountDetails(id) {
  return firebase.database().ref(`account/${id}`).once('value');
}

/*
*
*
*
* CARD
*
*
*
*
*/

export function createCard(id) {
  firebase.database().ref(`card/${id}`).set({ cardNum: uuid.v4() });
}

/*
*
*
* TRANSITION
*
*
*
*/

export async function fetchListResta(idCustomer) {
  return firebase.database().ref('operation-resta').orderByChild('idEmisor').equalTo(idCustomer).once('value');
}

export async function fetchListSuma(idCustomer) {
  return firebase.database().ref('operation-suma').orderByChild('idReceptor').equalTo(idCustomer).once('value');
}

export function transitionSuma(idEmisor, idReceptor, cantidad) {
  return firebase.database().ref('operation-suma').push({ idEmisor, idReceptor, cantidad, date: moment(new Date()).format('DD/MM/YYYY') }).key;
}

export function transitionResta(idEmisor, idReceptor, cantidad) {
  return firebase.database().ref('operation-resta').push({ idEmisor, idReceptor, cantidad, date: moment(new Date()).format('DD/MM/YYYY') }).key;
}

export async function editMonto(idCustomer, monto, type) {
  const ref = await firebase.database().ref(`account/${idCustomer}`).once('value');
  const montoFinal = (type === '+') ?
   parseInt(ref.child('monto').val(), 2) + parseInt(monto, 2) :
   parseInt(ref.child('monto').val(), 2) - parseInt(monto, 2);

  const dataToUpdate = {
    numeroCuenta: ref.child('numeroCuenta').val(),
    monto: montoFinal,
  };

  await firebase.database().ref(`account/${idCustomer}`).update(dataToUpdate);
}
