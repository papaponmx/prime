import {
  selectGoalsListDomain,
  selectGoalsList,
  selectGoalById,
} from '../selectors';

describe('selectGoalsListDomain', () => {
  const goalsList = {
    list: [
      {
        id: 'ABC',
        name: 'Do the Laundry',
      },
    ],
    isLoaded: true,
  };

  const globalState = {
    goalsList,
  };

  it('Expect to select the GoalListDomain', () => {
    expect(selectGoalsListDomain(globalState)).toEqual(goalsList);
  });

  it('Should select goal by ID', () => {
    const id = 'ABC';
    const expectedGoal = {
      id: 'ABC',
      name: 'Do the Laundry',
    };

    expect(selectGoalById(globalState, id)).toEqual(expectedGoal);
  });

  it('Expect to select GoalList', () => {
    expect(selectGoalsList(globalState)).toEqual(goalsList.list);
  });
});
