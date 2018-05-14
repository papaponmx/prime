import * as firebase from 'firebase';
import { provider, auth } from '../store';
import { put } from 'redux-saga/effects';

export function* signupSaga() {
  let token, user;

  yield firebase
    .auth()
    .signInWithPopup(provider)
    .then(result => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      console.log('DQTP: Result is ', result)
      token = result.credential.accessToken;
      user = result.user;
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = error.credential;
    })

  yield put({
    type: 'SET_PROFILE',
    payload: {
      isLoaded: true,
      user,
    },
  });

  yield console.log('Token is ', token);
}
