import { takeLatest, put } from 'redux-saga/effects';
import { LOGIN_USER } from './constants';
import { loginUserSuccess } from './actions';

export function* loginUserSaga() {
  // let token, userInformation
  yield put(
    loginUserSuccess({
      user: {
        name: 'John Wick',
        email: 'user@example.com',
      },
    }),
  );
  // try {

  // yield app
  //   .auth()
  // .signInWithPopup(googleProvider)
  // .then(result => {
  // IDEA: Encript token
  //       token = result.credential.accessToken
  //       userInformation = JSON.stringify(result.user)
  //       localStorage.setItem('prime-app-UserToken', token)
  //       localStorage.setItem('prime-app-UserInformation', userInformation)
  //     })
  //   yield put(
  //     setUserInformation({
  //       token,
  //       userInformation,
  //     }),
  //   )
  // } catch (error) {
  //   // FIXME: Handle error gracefully
  //   // console.log(error)
  // }
}

// Individual exports for testing
export default function* watcherSaga() {
  yield takeLatest(LOGIN_USER, loginUserSaga);
  // See example in containers/HomePage/saga.js
}
