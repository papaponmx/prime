import { takeEvery } from 'redux-saga/effects'
import addGoalSaga from './addGoalSaga'
import fetchGoalsSaga from './fetchGoalsSaga.mjs'
import deleteGoalSaga from './deleteGoalSaga'
import {
  ADD_GOAL,
  DELETE_GOAL,
  FETCH_GOALS,
  SIGNUP_USER,
} from '../actions/types'
import loginSaga from './loginSaga.mjs';

function* watcherSaga() {
  yield takeEvery(SIGNUP_USER, loginSaga)
  yield takeEvery(ADD_GOAL, addGoalSaga)
  yield takeEvery(FETCH_GOALS, fetchGoalsSaga)
  yield takeEvery(DELETE_GOAL, deleteGoalSaga)  // TODO: Develop this saga
  // yield takeEvery(ADD_ROLE, addRoalSaga) TODO: Develop this saga
}

// TODO: Add barrel for sagas

export default watcherSaga;
