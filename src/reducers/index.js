import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import rolesReducer from './reducer_roles';
import goalsReducer from './reducer_goals';

const rootReducer = combineReducers({
  roles: rolesReducer,
  goals: goalsReducer,
  form: formReducer,
});

export default rootReducer;
