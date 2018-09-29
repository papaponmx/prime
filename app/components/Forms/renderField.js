import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import { FieldWrapper } from './styles';

// TODO: Move this into Form/common inputs
const renderField = ({
  input,
  defaultValue,
  label,
  type,
  name,
  meta: { touched, error },
}) => (
  <FieldWrapper key={name}>
    <TextField
      {...input}
      label={label}
      type={type}
      id={name}
      name={name}
      error={touched && error}
      helperText={touched && error && error}
      defaultValue={defaultValue}
      InputLabelProps={{
        shrink: true,
      }}
    />
  </FieldWrapper>
);

// TODO: Pass texts as theme variables

renderField.propTypes = {
  input: PropTypes.any,
  label: PropTypes.string,
  type: PropTypes.string,
  meta: PropTypes.any,
  name: PropTypes.string,
  defaultValue: PropTypes.string,
};

export default renderField;
