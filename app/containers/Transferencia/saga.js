import { call, put, takeEvery } from 'redux-saga/effects';
import {
  LIST_CUSTOMER_TRANSITION_INIT,
  TRANSITION_ACTION_INIT,
} from './constants';
import {
  fetchListCustomerSuccess,
  fetchListCustomerFailure,
  transitionActionSuccess,
  transitionActionFail,
} from './actions';
import {
  getListCustomer,
  transitionSuma,
  transitionResta,
  editMonto,
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

export function* realizarTrans(action) {
  try {
    const { emisor, receptor, monto } = action.payload;
    const trans = { emisor, receptor, monto };
    const restar = { id: emisor, monto, type: '-' };
    const sumar = { id: receptor, monto, type: '+' };
    yield call(transitionSuma, trans);
    yield call(transitionResta, trans);
    yield call(editMonto, sumar);
    yield call(editMonto, restar);
    yield put(transitionActionSuccess());
  } catch (error) {
    yield put(transitionActionFail(error));
  }
}

export default function* defaultSaga() {
  yield takeEvery(LIST_CUSTOMER_TRANSITION_INIT, obtenerCustomer);
  yield takeEvery(TRANSITION_ACTION_INIT, realizarTrans);
}
