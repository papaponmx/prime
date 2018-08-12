import { addGoal } from './goals.mjs';
import { ADD_GOAL } from './index.mjs'

// const addGoal = require('./goals.mjs');
// const ADD_GOAL = require('./index.mjs');

describe('Goal actions test', () => {
  it('Should create add art action', () => {  
    const payload = {
      dueDate: 190000303,
      name: 'Hit the gym',
    }
    const expectedAction = {
      type: ADD_GOAL,
      payload,
    }

    const action = addGoal({
      type: ADD_GOAL,
      payload
    });

    expect(action).toEqual(expectedAction);
  });



})
