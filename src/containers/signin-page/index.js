import React, { Component } from 'react';
import { connect } from 'react-redux';
import GoogleButton from 'react-google-button';
import { signupUser } from '../../actions';

export class SigninPage extends Component {
  render() {
    return (
      <div>
        <h1>SigninPage</h1>
        <GoogleButton
          onClick={this.props.signup}
        />

      </div>
    )
  }
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
  signup: () => dispatch(signupUser()),


})

export default connect(mapStateToProps, mapDispatchToProps)(SigninPage);
