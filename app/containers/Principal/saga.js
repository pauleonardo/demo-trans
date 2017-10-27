import { call, put, takeEvery } from 'redux-saga/effects';
import {
  FETCH_LIST_CUSTOMER_INIT,
  FETCH_LIST_COUNTRY_INIT,
  DELETE_CUSTOMER_INIT,
  DELETE_CUSTOMER_SUCCESS,
} from './constants';
import {
  fetchListCustomerSuccess,
  fetchListCustomerFailure,
  fetchListCountrySuccess,
  fetchListCountryFailure,
  fetchDeleteSuccess,
  fetchDeleteFailure,
} from './actions';
import {
  getListCustomer,
  getCountrys,
  deleteCustomer,
} from '../../client-api';

export function* obtenerCustomer() {
  try {
    const data = yield call(getListCustomer);
    const customers = data.val();
    yield put(fetchListCustomerSuccess(customers));
  } catch (error) {
    yield put(fetchListCustomerFailure(error));
  }
}

export function* obtenerCountryList() {
  try {
    const data = yield call(getCountrys);
    yield put(fetchListCountrySuccess(data));
  } catch (error) {
    yield put(fetchListCountryFailure(error));
  }
}

export function* borrarCustomer(action) {
  try {
    const { payload } = action;
    yield call(deleteCustomer, payload);
    yield put(fetchDeleteSuccess());
  } catch (error) {
    yield put(fetchDeleteFailure(error));
  }
}

export default function* defaultSaga() {
  yield takeEvery(FETCH_LIST_CUSTOMER_INIT, obtenerCustomer);
  yield takeEvery(FETCH_LIST_COUNTRY_INIT, obtenerCountryList);
  yield takeEvery(DELETE_CUSTOMER_INIT, borrarCustomer);
  yield takeEvery(DELETE_CUSTOMER_SUCCESS, obtenerCustomer);
}
