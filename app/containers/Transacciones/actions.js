/*
 *
 * Transacciones actions
 *
 */

import {
  DEFAULT_ACTION,
  FETCH_ACCOUNT_INIT,
  FETCH_ACCOUNT_SUCCESS,
  FETCH_ACCOUNT_FAILURE,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function fetchAccountInit(id) {
  return {
    type: FETCH_ACCOUNT_INIT,
    payload: id,
  };
}

export function fetchAccountSuccess(details) {
  return {
    type: FETCH_ACCOUNT_SUCCESS,
    payload: details,
  };
}

export function fetchAccountFailure(error) {
  return {
    type: FETCH_ACCOUNT_FAILURE,
    payload: error,
  };
}
