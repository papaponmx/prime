import React from 'react';
import AddRolesPage from '.';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });

describe('AddRolesPage', () => {
  const output = shallow(
    <AddRolesPage />
  );
  const header = output.find('h1');
  it('Sould Render add roles page', () => {  
    expect(shallowToJson(output)).toMatchSnapshot();
  });

  it('Should have the Add Roles header', () => {  
    expect(header.text()).toMatch(/Add Roles/);
  });
});
