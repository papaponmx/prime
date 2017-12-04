import React from 'react';
import AddRoleForm from '.';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });

describe('AddRoleForm', () => {
  // const output = shallow(
  //   <AddRoleForm />
  // );
  // const header = output.find('h1');
  xit('Sould Render add roles page', () => {  
    expect(shallowToJson(output)).toMatchSnapshot();
  });


});
