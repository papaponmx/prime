import { takeEvery } from 'redux-saga/effects'
import { ADD_GOAL, SIGNUP_USER } from '../actions/types'
import addGoalSaga from './addGoalSaga'
import { signupSaga } from './signupSaga'

function * watcherSaga () {
  yield takeEvery(SIGNUP_USER, signupSaga)
  yield takeEvery(ADD_GOAL, addGoalSaga)
// yield takeEvery(ADD_ROLE, addRoalSaga) TODO: Develop this saga
}

export default watcherSaga
