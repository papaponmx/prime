import 'babel-polyfill'
import { app, googleProvider } from '../store'
import { put } from 'redux-saga/effects'
import { setUserInformation } from '../actions/auth'

const loginSaga = function * () {
  let token, userInformation
  debugger

  try {
    yield app
      .auth()
      .signInWithPopup(googleProvider)
      .then(result => {
        console.log('result works', result)
        // IDEA: Encript token
        token = result.credential.accessToken
        userInformation = JSON.stringify(result.user)
        localStorage.setItem('prime-app-UserToken', token)
        localStorage.setItem('prime-app-UserInformation', userInformation)
      })
    yield put(
      setUserInformation({
        token,
      userInformation})
    )
  } catch (error) {
    console.log(error)
  }
}

export default loginSaga
