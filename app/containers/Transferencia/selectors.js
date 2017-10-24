import { createSelector } from 'reselect';

/**
 * Direct selector to the transferencia state domain
 */
const selectTransferenciaDomain = (state) => state.get('transferencia');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Transferencia
 */

const makeSelectTransferencia = () => createSelector(
  selectTransferenciaDomain,
  (substate) => substate.toJS()
);

export default makeSelectTransferencia;
export {
  selectTransferenciaDomain,
};
