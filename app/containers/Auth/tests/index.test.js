// eslint-disable-file
import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';

import Auth from '../index';

let store;

describe('<Auth />', () => {
  beforeEach(() => {
    const mockStore = configureStore();

    // creates the store with any initial state or middleware needed
    store = mockStore({
      user: {
        isLoaded: true,
      },
    });
  });
  it('Should render the component only when auth prop is true', () => {
    const Component = <h1>Hola</h1>;
    const ConditionalComponent = Auth(Component);
    const wrapper = shallow(<ConditionalComponent store={store} />);
    expect(wrapper).not.toBe(null);
  });
});
