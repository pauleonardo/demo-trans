/*
 *
 * Principal reducer
 *
 */

import { fromJS } from 'immutable';
import {
  FETCH_LIST_CUSTOMER_INIT,
  FETCH_LIST_CUSTOMER_SUCCESS,
  FETCH_LIST_CUSTOMER_FAILURE,
  FETCH_LIST_COUNTRY_INIT,
  FETCH_LIST_COUNTRY_SUCCESS,
  FETCH_LIST_COUNTRY_FAILURE,
} from './constants';

const initialState = fromJS({
  headers: [
      { order: 2, name: 'ID' },
      { order: 1, name: 'Pais' },
      { order: 3, name: 'Nombre' },
      { order: 4, name: 'Deportes' },
      { order: 5, name: 'Edad' },
      { order: 6, name: 'Borrar' },
      { order: 7, name: 'Editar' },
      { order: 8, name: 'Transacciones' }],
  loading: false,
  error: null,
  data: [],
});

function principalReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_LIST_CUSTOMER_INIT:
      return state.merge({
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
    default:
      return state;
  }
}

export default principalReducer;
