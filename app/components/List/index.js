/**
 *
 * List
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

/* eslint-disable */
const List = ({ list, listType = null }) => {
  const prop = listType === null ? 'header' : `${listType}Header`;
  return (
    <div>
    <h3>
    <FormattedMessage {...messages[prop]} />
    </h3>
    <ul>
    {list.map(({id, name}) => <li key={id}>
      <Link to={`goals/${id}`}> {name} </Link>
      </li>
    )}
    </ul>
    </div>
  );
};
/* eslint-enable */

List.propTypes = {
  list: PropTypes.array.isRequired,
  listType: PropTypes.oneOf(['goals', 'roles', null]),
};

export default List;
