/*
 *
 * Transferencia reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  LIST_CUSTOMER_TRANSITION_INIT,
  LIST_CUSTOMER_TRANSITION_SUCCESS,
  LIST_CUSTOMER_TRANSITION_FAILURE,
  TRANSITION_ACTION_SUCCESS,
  TRANSITION_ACTION_FAIL,
  TRANSITION_ACTION_INIT,
} from './constants';

const initialState = fromJS({
  customers: [],
  error: false,
  loading: false,
  terminada: false,
});

function transferenciaReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case LIST_CUSTOMER_TRANSITION_INIT:
      return state.merge({
        loading: true,
        terminada: false,
        error: false,
      });
    case LIST_CUSTOMER_TRANSITION_SUCCESS:
      return state.merge({
        loading: false,
        customers: action.payload,
      });
    case LIST_CUSTOMER_TRANSITION_FAILURE:
      return state.merge({
        loading: false,
        error: true,
        terminada: true,
      });
    case TRANSITION_ACTION_INIT:
      return state.merge({
        loading: true,
        terminada: false,
        error: false,
      });
    case TRANSITION_ACTION_SUCCESS:
      return state.merge({
        loading: false,
        terminada: true,
        error: false,
      });
    case TRANSITION_ACTION_FAIL:
      return state.merge({
        loading: false,
        terminada: true,
        error: true,
      });
    default:
      return state;
  }
}

export default transferenciaReducer;
