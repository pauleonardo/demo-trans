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
} from './constants';

const initialState = fromJS({
  customers: [],
});

function transferenciaReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case LIST_CUSTOMER_TRANSITION_INIT:
      return state.merge({
        loading: true,
      });
    case LIST_CUSTOMER_TRANSITION_SUCCESS:
      return state.merge({
        loading: false,
        customers: action.payload,
      });
    case LIST_CUSTOMER_TRANSITION_FAILURE:
      return state.merge({
        loading: false,
        error: action.payload,
      });
    default:
      return state;
  }
}

export default transferenciaReducer;
