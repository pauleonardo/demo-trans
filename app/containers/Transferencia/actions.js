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
  TRANSITION_ACTION_INIT,
  TRANSITION_ACTION_SUCCESS,
  TRANSITION_ACTION_FAIL,
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

export function transitionActionInit(datos) {
  return {
    type: TRANSITION_ACTION_INIT,
    payload: datos,
  };
}


export function transitionActionSuccess() {
  return {
    type: TRANSITION_ACTION_SUCCESS,
  };
}

export function transitionActionFail(error) {
  return {
    type: TRANSITION_ACTION_FAIL,
    payload: error,
  };
}
