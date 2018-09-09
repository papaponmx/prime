import React from 'react';
import { shallow } from 'enzyme';

import { GoalsList } from '../index';

describe('<GoalsList />', () => {
  it('Should render list of goals', () => {
    const wrapper = shallow(
      <GoalsList
        goals={{
          list: [
            {
              createdAt: 1533959056310,
              dueDate: 1534550400000,
              id: 'goal-.mzir08u',
              isDone: false,
              name: 'Do something',
            },
            {
              createdAt: 1533561506443,
              dueDate: '2018-08-07',
              id: 'goal-.ppalv8o',
              isDone: true,
              name: 'Some goal',
            },
          ],
        }}
      />,
    );
    expect(wrapper).toMatchSnapshot();
    // expect(wrapper).toEqual(false);
  });
});
