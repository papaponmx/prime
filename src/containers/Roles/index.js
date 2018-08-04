import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import React from 'react';
import RolesList from '../../components/rolesList';
import '../../reducers';
import Button from '@material-ui/core/Button';
import {themeStyle} from '../../styles/buttonStyles';

class RolePage extends React.Component {
  render() {
    return (
      <div>
        <h1>Roles</h1>
        <RolesList roles={this.props.roles.toJS()} />
        <Button style={themeStyle} onClick={() => this.props.changePage()}>Add Roles</Button>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  changePage: () => push('/roles/add')
}, dispatch)

function mapStateToProps (state) {
  return { roles: state.roles };
}

export default connect(mapStateToProps, mapDispatchToProps)(RolePage);
