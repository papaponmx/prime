import * as firebase from 'firebase';
import { provider } from '../store';
import { put } from 'redux-saga/effects';
import { setUserInformation } from '../actions/auth';

export function* signupSaga() {
  let token, userInformation

  yield firebase
    .auth()
    .signInWithPopup(provider)
    .then(result => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      // IDEA: Encript token
      debugger;
      token = result.credential.accessToken
      localStorage.setItem('prime-app-UserToken', token);
      userInformation = result.user
    })
    .catch(error => {
      // const errorCode = error.code
      // const errorMessage = error.message
      // const email = error.email
      // const credential = error.credential
    });

  yield put(
    setUserInformation({
      token,
      userInformation,
    }),
  )
}
