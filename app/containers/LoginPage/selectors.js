/**
 * Direct selector to the user state domain
 */

export const selectUser = state => state.user;
export const selectUserUid = state => state.data.uid;

/**
 * Other specific selectors
 */

/**
 * Default selector used by LoginPage
 */

export default selectUser;
