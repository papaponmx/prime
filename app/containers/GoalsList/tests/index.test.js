import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';

import { GoalsList } from '../index';
// import { mockList as list } from 'components/List/tests/mocs';

describe('<GoalsList />', () => {
  let store;
  beforeEach(() => {
    const mockStore = configureStore();
    store = mockStore({
      goalsList: {
        isLoading: false,
        isLoaded: true,
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
        error: null,
      },
    });
  });

  it('Should render list of goals', () => {
    console.log(JSON.stringify(store, null, 2));
    const wrapper = shallow(
      <GoalsList store={store} goals={store.goalsList} />,
    );
    expect(wrapper).toMatchSnapshot();
    // expect(wrapper).toEqual(false);
  });
});
