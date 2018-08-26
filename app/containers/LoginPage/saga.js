import { takeLatest, put } from 'redux-saga/effects';
import {
  LOGIN_USER,
  PRIME_APP_USER_TOKEN,
  PRIME_APP_USER_DATA,
} from './constants';
import { loginUserSuccess, loginUserError } from './actions';
import { app, googleProvider } from '../../configureStore';

export function* loginUserSaga() {
  let token;
  let userInformation;
  try {
    yield app
      .auth()
      .signInWithPopup(googleProvider)
      .then(result => {
        // IDEA: Encript token
        token = result.credential.accessToken;
        userInformation = result.user;
        localStorage.setItem(PRIME_APP_USER_TOKEN, token);
        localStorage.setItem(
          PRIME_APP_USER_DATA,
          JSON.stringify(userInformation),
        );
      });
    yield put(
      loginUserSuccess({
        token,
        userInformation,
      }),
    );
  } catch (error) {
    loginUserError({
      code: error.code,
      message: error.message,
    });
  }
}

// Individual exports for testing
export default function* watcherSaga() {
  yield takeLatest(LOGIN_USER, loginUserSaga);
  // See example in containers/HomePage/saga.js
}
