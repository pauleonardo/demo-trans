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
} from './constants';

const initialState = fromJS({
  loading: false,
  detail: { monto: 0, numeroCuenta: '' },
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
    default:
      return state;
  }
}

export default transaccionesReducer;
