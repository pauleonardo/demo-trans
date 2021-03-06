import { call, put, takeEvery } from 'redux-saga/effects';
import { clone } from 'lodash/lang';

import {
  FETCH_ACCOUNT_INIT,
  FETCH_ACCOUNT_SUCCESS,
  CREATE_ACCOUNT_INIT,
} from './constants';
import {
  fetchAccountSuccess,
  fetchAccountFailure,
  fecthListTransSuccess,
  fetchListTransFailure,
  fechListTransInit,
  fetchCreateAccountSuccess,
  fetchCreateAccountFailure,
} from './actions';
import {
  getAccountDetails,
  fetchListResta,
  fetchListSuma,
  createAccount,
} from '../../client-api';

export function* obtenerCustomerAcc(action) {
  try {
    const { payload } = action;
    const data = yield call(getAccountDetails, payload);
    yield put(fetchAccountSuccess(data, payload));
  } catch (error) {
    yield put(fetchAccountFailure(error));
  }
}

export function* obtenerTransCustomer(action) {
  const { payloadid } = action;
  try {
    let listResta = yield call(fetchListResta, payloadid);
    let listSuma = yield call(fetchListSuma, payloadid);
    yield put(fechListTransInit());
    const trans = [];
    listResta = (listResta === null) ? {} : listResta;
    listSuma = (listSuma === null) ? {} : listSuma;
    const suma = new Map(Object.entries(listSuma));
    const resta = new Map(Object.entries(listResta));
    suma.forEach((value, key) => {
      const newValue = clone(value);
      newValue.id = key;
      newValue.type = '+';
      trans.push(newValue);
    });
    resta.forEach((value, key) => {
      const newValue = clone(value);
      newValue.id = key;
      newValue.type = '-';
      trans.push(newValue);
    });
    yield put(fecthListTransSuccess(trans));
  } catch (error) {
    yield put(fetchListTransFailure(error));
  }
}

export function* crearCuenta(action) {
  try {
    const { payload: { id, monto } } = action;
    yield call(createAccount, id, monto);
    yield put(fetchCreateAccountSuccess());
    yield call(obtenerCustomerAcc, { payload: id });
  } catch (error) {
    yield put(fetchCreateAccountFailure(error));
  }
}

// Individual exports for testing
export default function* defaultSaga() {
  yield takeEvery(FETCH_ACCOUNT_INIT, obtenerCustomerAcc);
  yield takeEvery(FETCH_ACCOUNT_SUCCESS, obtenerTransCustomer);
  yield takeEvery(CREATE_ACCOUNT_INIT, crearCuenta);
}
