import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import SigninPage from '../signin-page';
import { bindActionCreators } from 'redux';

export default function(ComposedComponent) {
  class Authentication extends Component {
    componentWillMount() {
      if (this.props.authenticated === false) {
        return this.props.changePage();
      }
    }

    componentWillUpdate(nextProps) {
      if (nextProps.authenticated === false) {
        return this.props.changePage();
      }
    }

    render() {
      return <ComposedComponent {...this.props} />
    }
  }

  const mapStateToProps = state => {
    return { authenticated: state.user.isLoaded };
  }

  const mapDispatchToProps = dispatch =>
  bindActionCreators({ changePage: () => push('/') }, dispatch);

  return connect(mapStateToProps, mapDispatchToProps)(Authentication);
}
