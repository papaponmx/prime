import { takeEvery } from 'redux-saga/effects'
import { SIGNUP_USER } from '../actions/types'
import { signupSaga } from './signup'

function* watcherSaga() {
  yield takeEvery(SIGNUP_USER, signupSaga)
}

export default watcherSaga;
