import { createSelector } from 'reselect';

/**
 * Direct selector to the principal state domain
 */
const selectPrincipalDomain = (state) => state.get('principal');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Principal
 */

const makeSelectPrincipal = () => createSelector(
  selectPrincipalDomain,
  (substate) => substate.toJS()
);

export default makeSelectPrincipal;
export {
  selectPrincipalDomain,
};
