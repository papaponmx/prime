// import firebase from 'firebase/app';
import { takeLatest, put, select } from 'redux-saga/effects';
import { FETCH_GOALS } from './constants';
import { fetchGoalsSuccess, fetchGoalsError } from './actions';
import { database as db } from '../../configureStore';
import { selectUserUid } from '../LoginPage/selectors';

export function* fetchGoals() {
  let list;
  const uid = yield select(selectUserUid);
  yield db.settings({ timestampsInSnapshots: true });

  try {
    yield db
      .collection('users')
      .doc(uid)
      .collection('goals')
      .get()
      .then(res => {
        list = res.docs.map(goal => goal.data());
        return list;
      });
  } catch (error) {
    yield put(fetchGoalsError(error));
  }
  yield put(fetchGoalsSuccess(list));
}

// Individual exports for testing
export default function* defaultSaga() {
  yield takeLatest(FETCH_GOALS, fetchGoals);

  // See example in containers/HomePage/saga.js
}
