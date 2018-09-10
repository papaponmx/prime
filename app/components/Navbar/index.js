/*
 * Navbar
 */

import React from 'react';
import { push } from 'react-router-redux';
import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import checkedIcon from '../../images/baseline-check_circle-24px.svg';
import faceIcon from '../../images/baseline-face-24px.svg';
import settingsIcon from '../../images/baseline-settings-20px.svg';
import trendingUpIcon from '../../images/baseline-trending_up-24px.svg';

import { NavbarContainer } from './styles';

export const Navbar = props => (
  <div>
    <AppBar position="static">
      <Toolbar variant="dense">
        <NavbarContainer>
          <span className="icon">
            <img src={checkedIcon} alt="Checked" />
          </span>
          <span className="icon">
            <img src={faceIcon} alt="Face" />
          </span>
          <span className="icon">
            <img src={trendingUpIcon} alt="Trending up graph" />
          </span>
          <span className="icon">
            <img src={settingsIcon} alt="Settings" />
          </span>
        </NavbarContainer>
      </Toolbar>
    </AppBar>
  </div>
);

const mapDispatchToProps = dispatch => ({
  /*
 * TODO: Add redirects available
 */
});

const mapStateToProps = params => {
  /*
  * TODO: Implement logic when user is authenticated and when not.
  */
};

const withConnect = connect(
  mapDispatchToProps,
  mapStateToProps,
);

export default compose(withConnect)(Navbar);
