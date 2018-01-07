import React, { Component } from 'react'; // eslint-disable-line no-unused-vars

export const renderError =  (error) => {
  return (<div className="form-text-error">
    { error }
  </div>);
}

export function renderSelect( props ) {
  return  (<div>
    <label htmlFor={props.id} >{ props.label}:</label>
    <div>
      <select { ...props.input } >
        <option />
        {renderOptions(props.options)}
      </select>
    </div>
    {(props.meta.touched && props.meta.error) ?
      renderError(props.meta.error) : ''
    }
  </div>);
}

export function renderOptions(options) {
  return options.map((singleOption) => (
    <option value={singleOption.id} key={singleOption.id}>        {singleOption.name}
    </option>
  ));
}