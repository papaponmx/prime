import { put, takeLatest } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { DELETE_GOAL } from '../GoalsList/constants';
import { database as db, app as firebase } from '../../configureStore';
import { deleteGoalError } from '../GoalsList/actions';

// Individual exports for testing

export function* deleteGoalSaga({ payload: id }) {
  try {
    yield db
      .collection('users')
      .doc(firebase.auth().getUid())
      .collection('goals')
      .doc(id)
      .delete();

    yield put(push('/'));
  } catch (error) {
    yield put(deleteGoalError(error));
  }
  // TODO: Delete Goal From state and handle error
}

export default function* defaultSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(DELETE_GOAL, deleteGoalSaga);
}
