import 'babel-polyfill'
import firebase from 'firebase/app'
import uniqueId from '../utils/uniqueId'

const addGoalSaga = function * ({ payload }) {
  const createdAt = new Date().getTime()
  const id = uniqueId('goal')
  const {
    goal: name,
    dueDate,
  } = payload
  const settings = { timestampsInSnapshots: true }
  const db = yield firebase.firestore()
  const firestore = firebase.firestore()
  firestore.settings(settings)


  yield db.collection('users')
    .doc(firebase.auth().getUid())
    .collection('goals')
    .doc(id)
    .set({
      createdAt,
      dueDate,
      id,
      isDone: false,
    name}).then(() => '')
    .catch((error) => error)
}

export default addGoalSaga
