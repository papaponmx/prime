/**
 *
 * List
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

const List = ({ list, listType = null }) => {
  const prop = listType === null ? 'header' : `${listType}Header`;
  return (
    <div>
      <FormattedMessage {...messages[prop]} />
      <ul>{list.map(item => <li> {item.name} </li>)}</ul>
    </div>
  );
};

List.propTypes = {
  list: PropTypes.array.isRequired,
  listType: PropTypes.oneOf(['goals', 'roles', null]),
};

export default List;
