import React, { Component } from 'react';
import { connect } from 'react-redux';

export class SigninPage extends Component {

  render() {
    return (
      <div>
        SigninPage
      </div>
    )
  }
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(SigninPage);
