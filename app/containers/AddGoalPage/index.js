/**
 *
 * AddGoalPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { compose } from 'redux';
import messages from './messages';
import AddGoalForm from './AddGoalForm';
import { Header, Section } from './styles';

/* eslint-disable react/prefer-stateless-function */
export class AddGoalPage extends React.Component {
  render() {
    return (
      <Section>
        <Header>
          <FormattedMessage {...messages.header} />
        </Header>
        <AddGoalForm />
      </Section>
    );
  }
}

AddGoalPage.propTypes = {
  dispatch: PropTypes.func,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(AddGoalPage);
