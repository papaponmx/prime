import 'babel-polyfill'
import firebase from 'firebase/app'
import { put, select } from 'redux-saga/effects'
import { fetchGoalsError, fetchGoalsSuccess } from '../actions'
import { getUid } from '../getters'

export default function * (action) {
  const db = yield firebase.firestore()
  const uid = yield select(getUid)
  yield db.settings({ timestampsInSnapshots: true })
  yield db.collection('users')
    .doc(uid)
    .collection('goals')
    .get()
    .then((res) => {
      const list = res.docs.map(goal => goal.data())
      // console.log(res.docs[1].data());
      put(fetchGoalsSuccess(list))
    })
    .catch((error) => {
      put(fetchGoalsError(error))
      console.log('Error getting document:', error)
    })
}
