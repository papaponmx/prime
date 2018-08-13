/**
 *
 * List
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function List() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

List.propTypes = {};

export default List;
