import React from 'react';
import PropTypes from 'prop-types';

const renderField = ({
  input,
  label,
  type,
  name,
  meta: { touched, error, warning },
}) => (
  <div>
    <label htmlFor={name}>{label}</label> {/* eslint-disable-line */}
    <div>
      <input {...input} placeholder={label} type={type} id={name} />
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
);

renderField.propTypes = {
  input: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  meta: PropTypes.any,
  name: PropTypes.string,
};

export default renderField;
