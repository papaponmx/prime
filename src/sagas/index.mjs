import { takeEvery } from 'redux-saga/effects'
import addGoalSaga from './addGoalSaga'
import fetchGoalsSaga from './fetchGoalsSaga.mjs'
import deleteGoalSaga from './deleteGoalSaga'
import updateGoalSaga from './updateGoalSaga.mjs';
import {
  ADD_GOAL,
  DELETE_GOAL,
  FETCH_GOALS,
  MARK_GOAL_AS_DONE,
  SIGNUP_USER,
} from '../actions/types'
import loginSaga from './loginSaga.mjs';
// TODO: Make barrel out of sagas

function* watcherSaga() {
  yield takeEvery(ADD_GOAL, addGoalSaga)
  yield takeEvery(DELETE_GOAL, deleteGoalSaga)
  yield takeEvery(FETCH_GOALS, fetchGoalsSaga)
  yield takeEvery(MARK_GOAL_AS_DONE, updateGoalSaga)
  yield takeEvery(SIGNUP_USER, loginSaga)
  // TODO: Develop this saga
  // yield takeEvery(ADD_ROLE, addRoalSaga)
  // TODO: Develop this saga
}

// TODO: Add barrel for sagas

export default watcherSaga;
