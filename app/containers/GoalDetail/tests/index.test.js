import React from 'react';
import { shallow } from 'enzyme';

import { GoalDetail } from '../index';

describe('<GoalDetail />', () => {
  const renderedComponent = shallow(
    <GoalDetail
      goal={{
        name: 'Get Some',
        createdAt: '1232132',
        dueDate: '34324343',
        id: 'sdfsd23',
        isDone: false,
      }}
    />,
  );

  it('Should have an <h2></h2> tag', () => {
    expect(renderedComponent.find('h2').length).toBe(1);
  });

  it('Should render two <p>', () => {
    expect(renderedComponent.find('p').length).toBe(2);
  });

  it('Should render a button', () => {
    expect(renderedComponent.find('a').length).toBe(1);
  });
});
