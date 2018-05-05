import React, { Component } from 'react';
import { connect } from 'react-redux';

export class SignupPage extends Component {

  render() {
    return (
      <div>
        SignupPage
      </div>
    )
  }
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(SignupPage);
