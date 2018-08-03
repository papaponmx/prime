import * as firebase from 'firebase'

const addGoalSaga = function * ({ payload }) {
  const createdAt = new Date().getTime()
  const { goal: name } = payload
  const db = yield firebase.firestore()
  const firestore = firebase.firestore()
  const settings = { timestampsInSnapshots: true }
  firestore.settings(settings)

  console.log(payload)
  debugger
  // TODO: Add dueDate
  // TODO: Add Area asocciated
  // TODO: Add Area dinamyc ID http://www.frontcoded.com/javascript-create-unique-ids.html
  yield db.collection('users')
    .doc(firebase.auth().getUid())
    .collection('goals')
    .doc('43')
    .set({
      createdAt,
    name})
    .then((docRef) => {
      console.log('Document written with ID: ', docRef)
    })
    .catch((error) => {
      console.error('Error adding document: ', error)
    })
}

export default addGoalSaga
