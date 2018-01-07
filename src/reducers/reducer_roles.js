import _ from 'lodash';
import {
  ADD_GOAL,
  ADD_ROLE,
  DELETE_ROLE,
} from '../actions';

let initialState = [];


const roles = localStorage.getItem('roles');
if (roles) {
  initialState = JSON.parse(roles);
}

export default (state = initialState, action) => {
  switch (action.type) {

    case ADD_ROLE:
    const id = _.size(state);
    let newState = _.concat(state,{
      id,
      name: action.payload,
      goals: []
    });
    localStorage.setItem('roles', JSON.stringify(newState));
    return newState;
    // TODO: Validate if the new role already extists

    case DELETE_ROLE:
    const newRoles = _.omit(state.roles, action.payload);
    return {
      ...state,
      roles: newRoles
    }

    case ADD_GOAL:
    const roleSelected =  _.find(state, role => role.id === Number(action.payload.roleId));
    const name = action.payload.goal
    const goalId = `${_.size(roleSelected.list) + 1}G${action.payload.roleId}`;
    const goals = _.concat(roleSelected.goals, {
      name,
      id: goalId,
    });
    const roleWithNewGoal = {
      ...roleSelected,
      goals,
    }
    const oldState = _.reject(state, roleSelected);
    newState = _.concat(oldState, roleWithNewGoal);
    localStorage.setItem('roles', JSON.stringify(newState));
    return newState;
    default:
    return state;
  }

}
