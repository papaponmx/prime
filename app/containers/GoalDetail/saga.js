import { put, takeLatest, select } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { DELETE_GOAL, MARK_GOAL_AS_DONE } from '../GoalsList/constants';
import { database as db, app as firebase } from '../../configureStore';
import { deleteGoalError } from '../GoalsList/actions';
import { selectGoalById } from '../GoalsList/selectors';

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

export function* updateGoalSaga({ type, payload: id }) {
  let data = {};
  if (type === MARK_GOAL_AS_DONE) {
    data = {
      isDone: true,
    };
  } else {
    // TODO: Test and define this logic
    yield select(selectGoalById(id));
  }

  // TODO: This  update is not working
  try {
    yield db
      .collection('users')
      .doc(firebase.auth().getUid())
      .collection('goals')
      .doc(id)
      .update(data);
    yield put(push('/'));
    // TODO: Update goal on state
  } catch (error) {
    // console.log(error);
  }
  // TODO: Handle error
}

export default function* defaultSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(DELETE_GOAL, deleteGoalSaga);
  yield takeLatest(MARK_GOAL_AS_DONE, updateGoalSaga);
}
