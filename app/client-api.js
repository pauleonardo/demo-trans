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
  return firebase.database().ref(`account/${id}`).once('value').then((snap) => snap.val());
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

export function fetchListResta(idCustomer) {
  return firebase.database().ref('operation-resta').orderByChild('emisor').equalTo(idCustomer).once('value').then((snap) => snap.val());
}

export function fetchListSuma(idCustomer) {
  return firebase.database().ref('operation-suma').orderByChild('receptor').equalTo(idCustomer).once('value').then((snap) => snap.val());
}

export async function transitionSuma(trans) {
  const { emisor, receptor, monto } = trans;
  await firebase.database().ref('operation-suma').push({ emisor, receptor, monto, date: moment(new Date()).format('DD/MM/YYYY') }).key;
}

export async function transitionResta(trans) {
  const { emisor, receptor, monto } = trans;
  await firebase.database().ref('operation-resta').push({ emisor, receptor, monto, date: moment(new Date()).format('DD/MM/YYYY') }).key;
}

export async function editMonto(edit) {
  const { id, monto, type } = edit;
  const ref = await firebase.database().ref(`account/${id}`).once('value');
  const montoIni = await ref.child('monto').val();
  const montoFinal = (type === '+') ?
   parseInt(montoIni, 0) + parseInt(monto, 0) :
   parseInt(montoIni, 0) - parseInt(monto, 0);

  const dataToUpdate = {
    numeroCuenta: ref.child('numeroCuenta').val(),
    monto: montoFinal,
  };

  await firebase.database().ref(`account/${id}`).update(dataToUpdate);
}

/*
*
*
* ASSETS
*
*
*
*/

export async function getCountrys() {
  try {
    const resFetch = await fetch('https://restcountries.eu/rest/v2/all', {
      method: 'GET',
      header: new Headers(),
      body: null,
    });
    const countries = await resFetch.json();
    return countries;
  } catch (error) {
    return error;
  }
}
