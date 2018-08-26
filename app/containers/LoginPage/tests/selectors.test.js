// import { fromJS } from 'immutable'
import { selectUser, selectUserUid } from '../selectors';

describe('selectLoginPageDomain', () => {
  const userState = {
    user: {
      isLoaded: true,
      isLoading: false,
      error: null,
      data: {
        uid: 'XXXX_XXXX',
      },
    },
  };

  it('Should select user state', () => {
    expect(selectUser(userState)).toEqual(userState.user);
  });

  it('Should select uid', () => {
    expect(selectUserUid(userState)).toEqual('XXXX_XXXX');
  });
});
