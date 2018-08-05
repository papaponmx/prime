import React, { Component } from 'react'
import { connect } from 'react-redux'
import AddGoalForm from '../../components/AddGoalForm'
import addGoal from '../../actions';


class AddGoalsPage extends Component {

  render() {

    return (
      <section>
        <h1>Add Goals Page</h1>
        <AddGoalForm
          handleSubmit={this.props.addGoal}
        />
      </section>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addGoal: values => dispatch(addGoal(values)),
})


export default connect(null, mapDispatchToProps)(AddGoalsPage)
