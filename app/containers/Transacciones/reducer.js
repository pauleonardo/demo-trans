/*
 *
 * Transacciones reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  FETCH_ACCOUNT_INIT,
  FETCH_ACCOUNT_SUCCESS,
  FETCH_ACCOUNT_FAILURE,
  FETCH_LIST_TRANS_INIT,
  FECTH_LIST_TRANS_SUCCESS,
  FETCH_LIST_TRANS_FAILURE,
  CREATE_ACCOUNT_INIT,
  CREATE_ACCOUNT_SUCCESS,
  CREATE_ACCOUNT_FAILURE,
  headers,
} from './constants';

const initialState = fromJS({
  loading: false,
  loadingList: true,
  detail: { monto: 0, numeroCuenta: '' },
  headers,
});

function transaccionesReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case FETCH_ACCOUNT_INIT:
      return state.merge({
        loading: true,
      });
    case FETCH_ACCOUNT_SUCCESS:
      return state.merge({
        detail: action.payload,
        loading: false,
      });
    case FETCH_ACCOUNT_FAILURE:
      return state.merge({
        loading: false,
        error: action.payload,
      });
    case FETCH_LIST_TRANS_INIT:
      return state.merge({
        loadingList: true,
      });
    case FECTH_LIST_TRANS_SUCCESS:
      return state.merge({
        transition: action.payload,
        loadingList: false,
      });
    case FETCH_LIST_TRANS_FAILURE:
      return state.merge({
        error: action.payload,
        loadingList: false,
      });
    case CREATE_ACCOUNT_INIT:
      return state.merge({
        error: false,
        loadingAcc: true,
      });
    case CREATE_ACCOUNT_SUCCESS:
      return state.merge({
        error: false,
        loadingAcc: false,
        loading: true,
      });
    case CREATE_ACCOUNT_FAILURE:
      return state.merge({
        error: action.error,
        loadingAcc: true,
      });
    default:
      return state;
  }
}

export default transaccionesReducer;
