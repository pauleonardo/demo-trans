import { call, put, takeEvery } from 'redux-saga/effects';
import {
  FETCH_LIST_CUSTOMER_INIT,
  FETCH_LIST_COUNTRY_INIT,
  DELETE_CUSTOMER_INIT,
  DELETE_CUSTOMER_SUCCESS,
  MODAL_CUSTOMER_EDIT_INIT,
  MODAL_CUSTOMER_CREATE_INIT,
  MODAL_CUSTOMER_CREATE_SUCCESS,
  MODAL_CUSTOMER_EDIT_SUCCESS,
} from './constants';
import {
  fetchListCustomerSuccess,
  fetchListCustomerFailure,
  fetchListCountrySuccess,
  fetchListCountryFailure,
  fetchDeleteSuccess,
  fetchDeleteFailure,
  editCustomerSuccess,
  editCustomerFailure,
  fetchCreateCustomerSuccess,
  fetchCreateCustomerFailure,
} from './actions';
import {
  getListCustomer,
  getCountrys,
  deleteCustomer,
  createCustomer,
  editCustomer,
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

export function* crearCustomer(action) {
  try {
    const { payload } = action;
    yield call(createCustomer, payload);
    yield put(fetchCreateCustomerSuccess());
  } catch (error) {
    yield put(fetchCreateCustomerFailure(error));
  }
}

export function* editarCustomer(action) {
  try {
    const { id, payload } = action;
    yield call(editCustomer, id, payload);
    yield put(editCustomerSuccess());
  } catch (error) {
    yield put(editCustomerFailure(error));
  }
}

export default function* defaultSaga() {
  yield takeEvery(FETCH_LIST_CUSTOMER_INIT, obtenerCustomer);
  yield takeEvery(FETCH_LIST_COUNTRY_INIT, obtenerCountryList);
  yield takeEvery(MODAL_CUSTOMER_CREATE_SUCCESS, obtenerCustomer);
  yield takeEvery(MODAL_CUSTOMER_EDIT_SUCCESS, obtenerCustomer);
  yield takeEvery(DELETE_CUSTOMER_INIT, borrarCustomer);
  yield takeEvery(DELETE_CUSTOMER_SUCCESS, obtenerCustomer);
  yield takeEvery(MODAL_CUSTOMER_CREATE_INIT, crearCustomer);
  yield takeEvery(MODAL_CUSTOMER_EDIT_INIT, editarCustomer);
}
