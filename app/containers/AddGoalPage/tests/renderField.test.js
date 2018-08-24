import React from 'react';
import { shallow } from 'enzyme';

import renderField from '../renderField';

describe('renderField()', () => {
  it('Should render field', () => {
    const wrapper = shallow(
      <renderField name="goal" type="text" label="Goal" />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
