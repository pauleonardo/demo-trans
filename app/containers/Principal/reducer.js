/*
 *
 * Principal reducer
 *
 */

import { fromJS } from 'immutable';
import {
  headers,
  FETCH_LIST_CUSTOMER_INIT,
  FETCH_LIST_CUSTOMER_SUCCESS,
  FETCH_LIST_CUSTOMER_FAILURE,
  FETCH_LIST_COUNTRY_INIT,
  FETCH_LIST_COUNTRY_SUCCESS,
  FETCH_LIST_COUNTRY_FAILURE,
  MODAL_CUSTOMER_EDIT_SUCCESS,
  MODAL_CUSTOMER_EDIT_FAILURE,
  MODAL_CUSTOMER_CREATE_SUCCESS,
  MODAL_CUSTOMER_CREATE_FAILURE,
  MODAL_CUSTOMER_EDIT_INIT,
  MODAL_CUSTOMER_CREATE_INIT,
} from './constants';

const initialState = fromJS({
  headers,
  loading: false,
  error: null,
  data: [],
  terminada: false,
});

function principalReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_LIST_CUSTOMER_INIT:
      return state.merge({
        terminada: false,
        loading: true,
        error: null,
      });
    case FETCH_LIST_CUSTOMER_SUCCESS:
      return state.merge({
        loading: false,
        error: null,
        data: (action.payload === null) ? [] : action.payload,
      });
    case FETCH_LIST_CUSTOMER_FAILURE:
      return state.merge({
        loading: false,
        error: action.payload,
      });
    case FETCH_LIST_COUNTRY_INIT:
      return state.merge({
        loadingCountries: true,
      });
    case FETCH_LIST_COUNTRY_SUCCESS:
      return state.merge({
        loadingCountries: false,
        countries: action.payload,
      });
    case FETCH_LIST_COUNTRY_FAILURE:
      return state.merge({
        loadingCountries: false,
        error: action.payload,
      });
    case MODAL_CUSTOMER_CREATE_INIT:
      return state.merge({
        loading: true,
        terminada: false,
        error: false,
      });
    case MODAL_CUSTOMER_CREATE_SUCCESS:
      return state.merge({
        loading: false,
        error: false,
        terminada: true,
      });
    case MODAL_CUSTOMER_CREATE_FAILURE:
      return state.merge({
        loading: false,
        error: true,
        terminada: true,
      });
    case MODAL_CUSTOMER_EDIT_INIT:
      return state.merge({
        loading: true,
        terminada: false,
        error: false,
      });
    case MODAL_CUSTOMER_EDIT_SUCCESS:
      return state.merge({
        loading: false,
        error: false,
        terminada: true,
      });
    case MODAL_CUSTOMER_EDIT_FAILURE:
      return state.merge({
        loading: false,
        error: action.payload,
        terminada: true,
      });
    default:
      return state;
  }
}

export default principalReducer;
