/*
 * Navbar
 */

import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Toolbar from '@material-ui/core/Toolbar';

import { NavbarContainer, AppBarStyled } from './styles';
import renderIcons from './renderIcons';

export const Navbar = ({ dispatch, pathname }) => (
  <div>
    <AppBarStyled>
      <Toolbar variant="dense">
        <NavbarContainer>{renderIcons(dispatch, pathname)}</NavbarContainer>
      </Toolbar>
    </AppBarStyled>
  </div>
);

const mapStateToProps = state => ({
  pathname: state.route.location.pathname,
  /*
  * TODO: Implement logic when user is authenticated and when not.
  */
});
const mapDispatchToProps = dispatch => ({
  /*
 * TODO: Add redirects available
 */
});

Navbar.proptypes = {
  dispatch: PropTypes.func,
  pathname: PropTypes.string,
};

const withConnect = connect(
  mapStateToProps,
  // mapDispatchToProps,
);

export default compose(withConnect)(Navbar);
