/**
 * Direct selector to the user state domain
 */

export const selectUser = state => state.user;
export const selectUserUid = state => state.user.data.uid;

export default selectUser;
