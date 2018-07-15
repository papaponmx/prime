import React, { Component } from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { CardHeader } from 'material-ui/Card'
// import RolesList from '../../components/roles-list'
// import GoalsList from '../../components/goals-list'

class Home extends Component {

  render () {
    return (
      <div>
        <CardHeader title={`Hello ${this.props.userInfo.displayName}`} /> TODO: Add relevant information her
      </div>
    )
  }
}

const mapStateToProps = state => ({
  userInfo: state.user.user.information
})

const mapDispatchToProps = dispatch => bindActionCreators({
  changePage: () => push('/about-us')
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
