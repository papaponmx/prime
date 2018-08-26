// import { push } from 'react-router-redux';
// import { put } from 'redux-saga/effects';
import { deleteGoalSaga } from '../saga';

/**
 * Test sagas
 */

/* eslint-disable redux-saga/yield-effects */
// import { defaultSaga } from '../saga';

// const generator = defaultSaga();

describe('defaultSaga Saga', () => {
  let deleteGoalGenerator;

  beforeEach(() => {
    deleteGoalGenerator = deleteGoalSaga({ payload: '123' });

    const selectDescriptor = deleteGoalGenerator.next().value;
    expect(selectDescriptor).toMatchSnapshot();

    const callDescriptor = deleteGoalGenerator.next().value;
    expect(callDescriptor).toMatchSnapshot();
  });

  xit('Should dispatch deleteGoalSuccess action if request is successful', () => {});

  xit('should dispatch the push(`/`) action if it request is successful', () => {
    const putDescriptor = deleteGoalGenerator.next().value;
    expect(JSON.stringify(putDescriptor, null, 2)).toMatch(`put(push('/'))`);
  });

  xit('Expect to have unit tests specified', () => {
    expect(true).toEqual(false);
  });
});
