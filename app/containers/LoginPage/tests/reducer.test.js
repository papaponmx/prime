import loginPageReducer from '../reducer';

describe('loginPageReducer', () => {
  it('returns the initial state', () => {
    expect(loginPageReducer(undefined, {})).toEqual({
      isLoaded: false,
      isLoading: false,
      error: null,
      data: {},
    });
  });
});
