import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import rolesReducer from './reducer_roles';

const rootReducer = combineReducers({
  roles: rolesReducer,
  form: formReducer
});

export default rootReducer;
