import React, { Component } from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ErrorBoundary from '../../components/ErrorBoundary'
import CardHeader from '@material-ui/core/CardHeader'
// import RolesList from '../../components/roles-list'
// import GoalsList from '../../components/goals-list'

class Home extends Component {

  render () {
    return (
      <ErrorBoundary>
        <CardHeader title={`Hello`} />
      </ErrorBoundary>
    )
  }
}

const mapStateToProps = state => ({
  userInfo: state.user
})

const mapDispatchToProps = dispatch => bindActionCreators({
  changePage: () => push('/about-us')
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
