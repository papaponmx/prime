import React, { Component } from 'react';
import { connect } from 'react-redux';
import Snackbar from '@material-ui/core/Snackbar';

import AddRoleForm from '../../components/AddRoleForm';
import {closeSnackbar} from '../../actions';

class AddRolesPage extends Component {
    render() {
      const open = (this.props.snackbar && this.props.snackbar.open)
      ? this.props.snackbar.open
      : false;
      const message = (this.props.snackbar && this.props.snackbar.message)
      ? this.props.snackbar.message
      : '';
        return (
            <div>
              <h1>Add Roles</h1>
              <AddRoleForm />
              <Snackbar
                open={open}
                message={message}
                autoHideDuration={4000}
                onRequestClose={this.props.closeSnack}
              />
            </div>
        )
    }
}

const mapStateToProps= state => ({
  snackbar: state.roles.snackbar,
});

const mapDispatchToProps = (dispatch)=> ({
  closeSnack: () => dispatch(closeSnackbar())
});


export default connect(mapStateToProps, mapDispatchToProps)(AddRolesPage);
