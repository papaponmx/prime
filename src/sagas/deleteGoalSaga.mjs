import { database as db, app as firebase } from '../store'

const deleteGoalSaga = function * ({payload: id}) {

  yield db.collection('users')
    .doc(firebase.auth().getUid())
    .collection('goals')
    .doc(id)
    .delete()
    .then(() => '')
    .catch((error) => error)
}

export default deleteGoalSaga
