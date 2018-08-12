import 'babel-polyfill'
import firebase from 'firebase/app'
import { select, put } from 'redux-saga/effects'
import { fetchGoalsError, fetchGoalsSuccess } from '../actions'
import { getUid } from '../getters'
import { database as db } from '../store'

const fetchGoalsSaga = function * () {
  const uid = yield select(getUid)
  yield db.settings({ timestampsInSnapshots: true })
  let list;

  try {
    yield db.collection('users')
      .doc(uid)
      .collection('goals')
      .get()
      .then((res) => {
        list = res.docs.map(goal => goal.data())
        return list;
      });
  } catch(error) {
    yield put(fetchGoalsError(error))
  }
  yield put(fetchGoalsSuccess(list))
}

export default fetchGoalsSaga
