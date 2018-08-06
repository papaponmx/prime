import 'babel-polyfill'
import { put } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import { database as db, app as firebase } from '../store'

const deleteGoalSaga = function * ({payload: id}) {
  yield db.collection('users')
    .doc(firebase.auth().getUid())
    .collection('goals')
    .doc(id)
    .delete()
    .then(() => '')
    .catch((error) => error)
  yield put(push('/'))
  // TODO: Delte Goal From state
}

export default deleteGoalSaga
