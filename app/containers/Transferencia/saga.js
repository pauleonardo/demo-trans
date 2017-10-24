import { call, put, takeEvery } from 'redux-saga/effects';
import {
  LIST_CUSTOMER_TRANSITION_INIT,
} from './constants';
import {
  fetchListCustomerSuccess,
  fetchListCustomerFailure,
} from './actions';
import { getListCustomer } from '../../client-api';

export function* obtenerCustomer() {
  try {
    const data = yield call(getListCustomer);
    const customers = data.val();
    yield put(fetchListCustomerSuccess(customers));
  } catch (error) {
    yield put(fetchListCustomerFailure(error));
  }
}

export default function* defaultSaga() {
  yield takeEvery(LIST_CUSTOMER_TRANSITION_INIT, obtenerCustomer);
}
