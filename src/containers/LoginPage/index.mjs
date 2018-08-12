import React, { Component } from 'react'
import { connect } from 'react-redux'
import GoogleButton from 'react-google-button'
import { signupUser } from '../../actions'
import ErrorBoundary from '../../components/ErrorBoundary'

export class LoginPage extends Component {
  render () {
    return (
      <ErrorBoundary>
        <h1>Welcome</h1>
        <GoogleButton onClick={this.props.signup} />
      </ErrorBoundary>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  signup: () => dispatch(signupUser()),
})

export default connect(null, mapDispatchToProps)(LoginPage)
