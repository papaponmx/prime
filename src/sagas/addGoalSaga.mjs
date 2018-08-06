import 'babel-polyfill'
import uniqueId from '../utils/uniqueId'
import { database as db, app as firebase, } from '../store';

const addGoalSaga = function * ({ payload }) {
  const createdAt = new Date().getTime()
  const id = uniqueId('goal')
  const {
    goal: name,
    dueDate,
  } = payload

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
