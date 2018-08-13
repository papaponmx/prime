/**
 * Direct selector to the user state domain
 */

export const selectUser = state => state.user;
export const getUid = state => state.user.data.uid;

/**
 * Other specific selectors
 */

/**
 * Default selector used by LoginPage
 */

export default selectUser;
