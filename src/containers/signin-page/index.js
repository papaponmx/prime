import React, { Component } from 'react';
import { connect } from 'react-redux';
import GoogleButton from 'react-google-button';
import { signupUser } from '../../actions';
import ErrorBoundary from '../../components/ErrorBoundary';

export class SigninPage extends Component {
  render() {
    return (
      <ErrorBoundary>
        <h1>SigninPage</h1>
        <GoogleButton
          onClick={this.props.signup}
        />
      </ErrorBoundary>
    )
  }
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
  signup: () => dispatch(signupUser()),


})

export default connect(mapStateToProps, mapDispatchToProps)(SigninPage);
