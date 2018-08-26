/**
 *
 * Auth
 *
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

export default function(ComposedComponent) {
  class Authentication extends Component {
    /* eslint-disable */
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
    /* eslint-enable */

    render() {
      return <ComposedComponent {...this.props} />;
    }
  }

  Authentication.propTypes = {
    componentWillMount: PropTypes.func,
    componentWillUpdate: PropTypes.func,
    render: PropTypes.func,
    authenticated: PropTypes.bool,
    changePage: PropTypes.func,
  };

  const mapStateToProps = state => ({ authenticated: state.user.isLoaded });

  const mapDispatchToProps = dispatch =>
    bindActionCreators({ changePage: () => push('/login') }, dispatch);

  return connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Authentication);
}
