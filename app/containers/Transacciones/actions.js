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
  FECTH_LIST_TRANS_SUCCESS,
  FETCH_LIST_TRANS_INIT,
  FETCH_LIST_TRANS_FAILURE,
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

export function fetchAccountSuccess(details, id) {
  return {
    type: FETCH_ACCOUNT_SUCCESS,
    payload: details,
    payloadid: id,
  };
}

export function fetchAccountFailure(error) {
  return {
    type: FETCH_ACCOUNT_FAILURE,
    payload: error,
  };
}

export function fecthListTransSuccess(trans) {
  return {
    type: FECTH_LIST_TRANS_SUCCESS,
    payload: trans,
  };
}

export function fechListTransInit() {
  return {
    type: FETCH_LIST_TRANS_INIT,
  };
}

export function fetchListTransFailure(error) {
  return {
    type: FETCH_LIST_TRANS_FAILURE,
    payload: error,
  };
}
