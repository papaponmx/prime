import { addRole } from '../../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import React from 'react';
import RolesList from '../../components/roles-list';
import '../../reducers';
import Button from 'material-ui/Button';
// import Dialog from 'material-ui/Dialog';

class RolePage extends React.Component {
  render() {
    return (
      <div>
        <h1>Roles</h1>
        <RolesList roles={this.props.roles} />
        <Button onClick={() => this.props.changePage()}>Add Roles</Button>
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