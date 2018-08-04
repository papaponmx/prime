import React from 'react';
import GoalsList from '.';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });


describe('Goals list', () => {  
  const goalProps = {
    list: [
      {
        id: 1,
        name: 'Get swole',
      },
      {
        id: 2,
        name: 'Eat clean',
      },
      {
        id: 3,
        name: 'Win more',
      },
    ]
  }

  const component = shallow(
    <GoalsList goals={goalProps} />
  );
  const meThisWeek = component.find('li');

  it('Should render', () => {  
    expect(shallowToJson(component)).toMatchSnapshot();
  });

  it('Should render a list of components', () => {  
    expect(meThisWeek.contains(<li>Win More</li>));
  });
});
