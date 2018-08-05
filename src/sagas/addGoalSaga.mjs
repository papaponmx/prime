import 'babel-polyfill'
import * as firebase from 'firebase'
import uniqueId from '../utils/uniqueId'

const addGoalSaga = function * ({ payload }) {
  const createdAt = new Date().getTime()
  const id = uniqueId('goal')
  const {
    goal: name,
  dueDate
} = payload
  const db = yield firebase.firestore()
  const firestore = firebase.firestore()
  const settings = { timestampsInSnapshots: true }
  firestore.settings(settings)

  // TODO: Add dueDate
  // TODO: Add Area asocciated

  yield db.collection('users')
    .doc(firebase.auth().getUid())
    .collection('goals')
    .doc(id)
    .set({
      createdAt,
      dueDate,
      id,
    name}).then((docRef) => {
    console.log('Document written with ID: ', docRef)
  })
    .catch((error) => {
      console.error('Error adding document: ', error)
    })
}

export default addGoalSaga
