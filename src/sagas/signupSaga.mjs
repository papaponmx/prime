import firebase from 'firebase'
import { provider } from '../store/index.mjs'
import { put } from 'redux-saga/effects'
import { setUserInformation } from '../actions/auth'

export function* signupSaga() {
  let token, userInformation

  yield firebase
    .auth()
    .signInWithPopup(provider)
    .then(result => {
      // IDEA: Encript token
      token = result.credential.accessToken
      userInformation = JSON.stringify(result.user)

      localStorage.setItem('prime-app-UserToken', token)
      localStorage.setItem('prime-app-UserInformation', userInformation)
    })
    .catch(error => {
      // const errorCode = error.code
      // const errorMessage = error.message
      // const email = error.email
      // const credential = error.credential
    })

  yield put(
    setUserInformation({
      token,
      userInformation
    })
  )
}
