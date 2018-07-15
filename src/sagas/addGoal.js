import * as firebase from 'firebase'

const addGoalSaga = function * () {
  // console.log('DQTP ')
  const db = yield firebase.firestore()
  const firestore = firebase.firestore()
  const settings = { timestampsInSnapshots: true }
  firestore.settings(settings)
  yield db.collection('users').add({
    first: 'Ada',
    last: 'Lovelace',
    born: 1815
  })
    .then(function (docRef) {
      console.log('Document written with ID: ', docRef.id)
    })
    .catch(function (error) {
      console.error('Error adding document: ', error)
    })
}

export default addGoalSaga
