import React from 'react';
import { shallow } from 'enzyme';

import { Navbar } from './index.test';

describe('<Navbar />', () => {
  xit('Should render', () => {
    const renderedComponent = shallow(<Navbar />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
