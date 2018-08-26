import goalsListReducer, { initialState } from '../reducer';

describe('goalsListReducer', () => {
  it('returns the initial state', () => {
    expect(goalsListReducer(undefined, {})).toEqual(initialState);
  });
});
