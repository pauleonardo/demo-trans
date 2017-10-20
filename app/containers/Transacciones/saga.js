import { call, put, takeEvery } from 'redux-saga/effects';

import {
  FETCH_ACCOUNT_INIT,
} from './constants';
import {
  fetchAccountSuccess,
  fetchAccountFailure,
} from './actions';
import {
  getAccountDetails,
} from '../../client-api';

export function* obtenerCustomerAcc(action) {
  try {
    const { payload } = action;
    const data = yield call(getAccountDetails, payload);
    yield put(fetchAccountSuccess(data));
  } catch (error) {
    yield put(fetchAccountFailure(error));
  }
}

// Individual exports for testing
export default function* defaultSaga() {
  yield takeEvery(FETCH_ACCOUNT_INIT, obtenerCustomerAcc);
}
