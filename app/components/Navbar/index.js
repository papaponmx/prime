/*
 * Navbar
 */

import React from 'react';
import { push } from 'react-router-redux';
import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Toolbar from '@material-ui/core/Toolbar';

import checkedIcon from '../../images/baseline-check_circle-24px.svg';
import faceIcon from '../../images/baseline-face-24px.svg';
import settingsIcon from '../../images/baseline-settings-20px.svg';
import trendingUpIcon from '../../images/baseline-trending_up-24px.svg';

import { NavbarContainer, AppBarStyled, IconWrapper } from './styles';

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

export const renderIcons = dispatch => Icons.map(
  ({ altText, name, route }) => (
    <IconWrapper 
    onClick={() => dispatch(push(route))} 
    key={route}
    active={location.pathname === route}
    >
      <img alt={altText} src={name} />
    </IconWrapper>
  )
)

export const Navbar = ({ dispatch }) => (
  <div>
    <AppBarStyled>
      <Toolbar variant="dense">
        <NavbarContainer>
          {renderIcons(dispatch)}
        </NavbarContainer>
      </Toolbar>
    </AppBarStyled>
  </div>
);

const mapStateToProps = params => {
  /*
  * TODO: Implement logic when user is authenticated and when not.
  */
};
const mapDispatchToProps = dispatch => ({
  /*
 * TODO: Add redirects available
 */
});

const withConnect = connect(
  // mapStateToProps,
  // mapDispatchToProps,
);

export default compose(withConnect)(Navbar);
