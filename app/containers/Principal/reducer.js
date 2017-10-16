/*
 *
 * Principal reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
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
});

function principalReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default principalReducer;
