import React, { Component } from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Card from "@material-ui/core/Card";
// import RolesList from '../../components/roles-list'
// import GoalsList from '../../components/goals-list'

class Home extends Component {

  render () {
    return (
      <div>
      Hello
      {
        // <CardHeader title={`Hello`} />
      }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  userInfo: state.user,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  changePage: () => push('/about-us')
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
