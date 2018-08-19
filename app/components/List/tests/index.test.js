import React from 'react';
import { shallow } from 'enzyme';
import { mockList as list } from './mocs';
import List from '../index';

describe('<List />', () => {
  let listType;
  let mounted;

  beforeEach(() => {
    mounted = shallow(
      List({
        list,
        listType,
      }),
    );
  });

  it('Expect to have unit tests specified', () => {
    expect(mounted).toMatchSnapshot();
  });

  xit('Should have a header listType as a fallback', () => {
    expect(mounted.props.listType).toBe('header');
  });

  it('Should render a header', () => {
    expect(mounted.find('h3')).toBeTruthy();
  });

  it('should render an <ul> tag', () => {
    const renderedComponent = shallow(<List list={list} />);
    expect(renderedComponent.type()).toEqual('div');
  });
});
