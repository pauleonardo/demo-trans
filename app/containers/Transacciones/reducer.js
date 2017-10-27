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
} from './constants';

const initialState = fromJS({
  loading: false,
  loadingList: true,
  detail: { monto: 0, numeroCuenta: '' },
  headers: [
    { name: 'ID_Transaccion', order: 1 },
    { name: 'ID_Emisor', order: 2 },
    { name: 'ID_Receptor', order: 3 },
    { name: 'Monto', order: 4 },
    { name: 'Tipo', order: 5 },
    { name: 'Fecha', order: 6 },
  ],
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
    default:
      return state;
  }
}

export default transaccionesReducer;
