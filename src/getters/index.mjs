export const getUid = state => state.user.user.information.uid;
export const getGoalById = (state, id) => state.goals.list
  .find(goal => goal.id === id);
