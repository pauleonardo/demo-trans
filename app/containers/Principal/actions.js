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
  FETCH_LIST_COUNTRY_INIT,
  FETCH_LIST_COUNTRY_SUCCESS,
  FETCH_LIST_COUNTRY_FAILURE,
  DELETE_CUSTOMER_INIT,
  DELETE_CUSTOMER_SUCCESS,
  DELETE_CUSTOMER_FAILURE,
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

export function fetchListCountryInit() {
  return {
    type: FETCH_LIST_COUNTRY_INIT,
  };
}

export function fetchListCountrySuccess(countries) {
  return {
    type: FETCH_LIST_COUNTRY_SUCCESS,
    payload: countries,
  };
}

export function fetchListCountryFailure(error) {
  return {
    type: FETCH_LIST_COUNTRY_FAILURE,
    payload: error,
  };
}

export function fetchDeleteInit(id) {
  return {
    type: DELETE_CUSTOMER_INIT,
    payload: id,
  };
}

export function fetchDeleteSuccess() {
  return {
    type: DELETE_CUSTOMER_SUCCESS,
  };
}

export function fetchDeleteFailure(error) {
  return {
    type: DELETE_CUSTOMER_FAILURE,
    payload: error,
  };
}
