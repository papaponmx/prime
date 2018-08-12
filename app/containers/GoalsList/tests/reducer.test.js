import { fromJS } from 'immutable';
import goalsListReducer from '../reducer';

describe('goalsListReducer', () => {
  it('returns the initial state', () => {
    expect(goalsListReducer(undefined, {})).toEqual(fromJS({}));
  });
});
