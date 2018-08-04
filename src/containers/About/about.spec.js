import React from 'react';
import About from '.';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });

describe('About', () => {
  it('Sould Render about page', () => {  
    const output = shallow(
      <About />
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });


});
