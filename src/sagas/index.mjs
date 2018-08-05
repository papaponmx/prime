import { takeEvery } from 'redux-saga/effects'
import addGoalSaga from './addGoalSaga'
import fetchGoalsSaga from './fetchGoalsSaga.mjs'
import { signupSaga } from './signupSaga'
import {
  ADD_GOAL,
  SIGNUP_USER,
  FETCH_GOALS,
} from '../actions/types'
import { fetchGoals } from '../actions/goals.mjs';

function* watcherSaga() {
  yield takeEvery(SIGNUP_USER, signupSaga)
  yield takeEvery(ADD_GOAL, addGoalSaga)
  yield takeEvery(FETCH_GOALS, fetchGoalsSaga)
  // yield takeEvery(ADD_ROLE, addRoalSaga) TODO: Develop this saga
}

// TODO: Add barrel for sagas

export default watcherSaga;
