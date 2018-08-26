import { loginUser } from '../actions';
import { LOGIN_USER } from '../constants';

describe('LoginPage actions', () => {
  describe('LoginUser Action', () => {
    it('has a type of LOGIN_USER', () => {
      const expected = {
        type: LOGIN_USER,
      };
      expect(loginUser()).toEqual(expected);
    });
  });
});
