import { createSelector } from 'reselect';
/**
 * Direct selector to the loginPage state domain
 */

const selectLoginPageDomain = state => state.loginPage;

/**
 * Other specific selectors
 */

/**
 * Default selector used by LoginPage
 */

const makeSelectLoginPage = () =>
  createSelector(selectLoginPageDomain, substate => substate.toJS());

export default makeSelectLoginPage;
export { selectLoginPageDomain };
