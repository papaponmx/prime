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
import { compose } from 'redux';
import GoogleButton from 'react-google-button';

import injectSaga from 'utils/injectSaga';
import saga from './saga';
import messages from './messages';
import { loginUser } from './actions';

/* eslint-disable react/prefer-stateless-function */
export class LoginPage extends React.Component {
  componentDidMount() {}

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
        <GoogleButton onClick={this.props.loginUser} />
        <p>
          <FormattedMessage {...messages.signInMesssage} />
        </p>
      </div>
    );
  }
}

LoginPage.propTypes = {
  loginUser: PropTypes.func,
};

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  loginUser: () => dispatch(loginUser()),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withSaga = injectSaga({ key: 'user', saga });

export default compose(
  withSaga,
  withConnect,
)(LoginPage);
