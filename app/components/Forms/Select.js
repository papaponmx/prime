import React from 'react';
import PropTypes from 'prop-types';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const RenderSelect = ({ input, label, name, meta: { touched, error } }) => (
  <FormControl {...error && error && touched}>
    <InputLabel htmlFor={name}>{label}</InputLabel>
    <Select {...input} name={name}>
      <MenuItem value="">
        <em>None</em>
      </MenuItem>
      {/** TODO: Make this a .map function */}
      <MenuItem value={10}>Placeholder</MenuItem>
      <MenuItem value={20}>Placeholder</MenuItem>
      <MenuItem value={30}>Thirty</MenuItem>
    </Select>
  </FormControl>
);

RenderSelect.propTypes = {
  input: PropTypes.any,
  label: PropTypes.string,
  type: PropTypes.string,
  meta: PropTypes.any,
  name: PropTypes.string,
  defaultValue: PropTypes.string,
};

export default RenderSelect;
