import React from 'react';
import { shallow } from 'enzyme';

import { AddGoalPage } from '../index';
import AddGoalForm from '../AddGoalForm';

describe('<AddGoalPage />', () => {
  const component = shallow(<AddGoalPage />);
  const children = AddGoalForm;

  it('Should render', () => {
    expect(component).toMatchSnapshot();
  });

  it('Should render a section', () => {
    expect(component.type()).toEqual('section');
  });

  it('Should have children', () => {
    expect(component.find(children)).toBeTruthy();
  });
});
