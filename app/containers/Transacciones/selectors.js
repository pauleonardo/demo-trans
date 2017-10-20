import { createSelector } from 'reselect';

/**
 * Direct selector to the transacciones state domain
 */
const selectTransaccionesDomain = (state) => state.get('transacciones');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Transacciones
 */

const makeSelectTransacciones = () => createSelector(
  selectTransaccionesDomain,
  (substate) => substate.toJS()
);

export default makeSelectTransacciones;
export {
  selectTransaccionesDomain,
};
