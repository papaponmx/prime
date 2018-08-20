import fecha from '../fecha';

describe('fecha()', () => {
  it('Should return a formated string:  25 Mar 2018 at 23h', () => {
    const currentDate = Date.parse('25 Mar 2018');
    const result = fecha(currentDate);
    expect(result).toEqual('Sunday, Mar 25, 2018');
  });

  it('Should fail when the date is not in millis', () => {
    const currentDate = '25 Mar 2018 at 23h';
    const result = fecha(currentDate);
    expect(result).toBeFalsy();
  });
});
