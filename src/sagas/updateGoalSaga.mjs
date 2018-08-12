import 'babel-polyfill'
import { put, select, } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import { database as db, app as firebase } from '../store'
import { MARK_GOAL_AS_DONE } from '../actions'
import { getGoalById } from '../getters'

const updateGoalSaga = function * ({ type, payload: id, }) {
  let data = {}
  if (type === MARK_GOAL_AS_DONE) {
    data = {
      isDone: true
    }
  } else {
    // TODO: Test and define this logic
    yield select(getGoalById(payload.id))
  }


  // TODO: This  update is not working
  try {
    yield db.collection('users')
      .doc(firebase.auth().getUid())
      .collection('goals')
      .doc(id)
      .update(data)
    yield put(push('/'))
    // TODO: Update goal on state

  } catch (error) {
    console.log(error);
  }
  // TODO: Handle error
}

export default updateGoalSaga
