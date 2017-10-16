/*
 *
 * Principal actions
 *
 */

import {
  DEFAULT_ACTION,
  FETCH_LIST_CUSTOMER_INIT,
  FETCH_LIST_CUSTOMER_SUCCESS,
  FETCH_LIST_CUSTOMER_FAILURE,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function fetchListCustomerInit() {
  return {
    type: FETCH_LIST_CUSTOMER_INIT,
  };
}

export function fetchListCustomerSuccess(customers) {
  return {
    type: FETCH_LIST_CUSTOMER_SUCCESS,
    payload: customers,
  };
}

export function fetchListCustomerFailure(error) {
  return {
    type: FETCH_LIST_CUSTOMER_FAILURE,
    payload: error,
  };
}
