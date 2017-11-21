import _ from 'lodash';
import React, { Component } from 'react';

export default class GoalsList extends Component {
    renderList() {
        return _.map(this.props.goals.list, goal => {
            return <li key={goal.id}>{goal.name}</li>
        })
    }

    render() {
        return (
            <ul className="goals-list">
                {this.renderList()}
            </ul>);
    }
}