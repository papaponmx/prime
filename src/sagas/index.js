import { takeEvery } from 'redux-saga/effects'

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchUser(action) {
  yield console.log('waddup')
}

function* mySaga() {
  yield takeEvery('USER_FETCH_REQUESTED', fetchUser)
}

export default mySaga
