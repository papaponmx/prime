/**
 *
 * LoginPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import GoogleButton from 'react-google-button';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectLoginPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { loginUser } from './actions';

/* eslint-disable react/prefer-stateless-function */
export class LoginPage extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>LoginPage Prime Planner App</title>
          <meta name="description" content="Login into your potential" />
        </Helmet>
        <h1>
          <FormattedMessage {...messages.header} />
        </h1>
        <GoogleButton onClick={this.props.login} />
        <p>
          <FormattedMessage {...messages.signInMesssage} />
        </p>
      </div>
    );
  }
}

LoginPage.propTypes = {
  login: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  loginpage: makeSelectLoginPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    login: () => dispatch(loginUser()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'loginPage', reducer });
const withSaga = injectSaga({ key: 'loginPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(LoginPage);
