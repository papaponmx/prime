import { takeLatest, put } from 'redux-saga/effects';
import { LOGIN_USER } from './constants';
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
        userInformation = JSON.stringify(result.user);
        localStorage.setItem('prime-app-UserToken', token);
        localStorage.setItem('prime-app-UserInformation', userInformation);
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
