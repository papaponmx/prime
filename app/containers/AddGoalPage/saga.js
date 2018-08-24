// import firebase from 'firebase/app';
import { takeLatest, put, select } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { database as db } from '../../configureStore';
import { selectUserUid } from '../LoginPage/selectors';
import uniqueId from '../../utils/uniqueId';
import { ADD_GOAL } from '../GoalsList/constants';

export function* addGoalSaga({ payload }) {
  console.log('DQTP, inside addGoalSaga');

  const createdAt = new Date().getTime();
  const id = uniqueId('goal');
  const { goal: name, dueDate: date } = payload;
  const d = new Date(date);
  const dueDate = d.getTime();
  // FIXME: Transform this in a toMilis Function
  const uid = yield select(selectUserUid);
  yield db
    .collection('users')
    .doc(uid)
    .collection('goals')
    .doc(id)
    .set({
      createdAt,
      dueDate,
      id,
      isDone: false,
      name,
    })
    .then(() => '')
    .catch(error => error);

  yield put(push('/'));
  // TODO: Add Goal to state
}

// Individual exports for testing
export default function* defaultSaga() {
  yield takeLatest(ADD_GOAL, addGoalSaga);
}
