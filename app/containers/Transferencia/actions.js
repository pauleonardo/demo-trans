/*
 *
 * Transferencia actions
 *
 */

import {
  DEFAULT_ACTION,
  LIST_CUSTOMER_TRANSITION_INIT,
  LIST_CUSTOMER_TRANSITION_SUCCESS,
  LIST_CUSTOMER_TRANSITION_FAILURE,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function fetchListCustomerInit() {
  return {
    type: LIST_CUSTOMER_TRANSITION_INIT,
  };
}

export function fetchListCustomerSuccess(customers) {
  return {
    type: LIST_CUSTOMER_TRANSITION_SUCCESS,
    payload: customers,
  };
}

export function fetchListCustomerFailure(error) {
  return {
    type: LIST_CUSTOMER_TRANSITION_FAILURE,
    payload: error,
  };
}
