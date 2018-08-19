import React from 'react';
import { shallow } from 'enzyme';
import { LoginPage } from '../index';

describe('<LoginPage />', () => {
  it('Should render component', () => {
    const wrapper = shallow(<LoginPage />);
    expect(wrapper).toMatchSnapshot();
  });

  it('Should render Google Button', () => {
    const wrapper = shallow(<LoginPage />);
    expect(JSON.stringify(wrapper.props().children, null, 2)).toMatch(
      'Sign in with Google',
    );
  });
});
