import React from 'react';
import { push } from 'react-router-redux';

import checkedIcon from '../../images/baseline-check_circle-24px.svg';
import faceIcon from '../../images/baseline-face-24px.svg';
import settingsIcon from '../../images/baseline-settings-20px.svg';
import trendingUpIcon from '../../images/baseline-trending_up-24px.svg';

import { IconWrapper } from './styles';

export const Icons = [
  {
    altText: 'Checked',
    name: checkedIcon,
    route: '/goals',
  },
  {
    altText: 'Face',
    name: faceIcon,
    route: '/roles',
  },
  {
    altText: 'Trending up graph',
    name: settingsIcon,
    route: '/settings',
  },
  {
    altText: 'Settings',
    name: trendingUpIcon,
    route: '/stats',
  },
];

const renderIcons = (dispatch, pathname) =>
  Icons.map(({ altText, name, route }) => (
    <IconWrapper
      onClick={() => dispatch(push(route))}
      key={route}
      active={pathname.includes(route)}
    >
      <img alt={altText} src={name} />
    </IconWrapper>
  ));

export default renderIcons;
