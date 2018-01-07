export function renderSelect( props ) {
  return  (<div>
    <label htmlFor={props.id} >{ props.label}:</label>
    <div>
      <select { ...props.input } >
        <option />
        {this.renderOptions(props.options)}
      </select>
    </div>
    {(props.meta.touched && props.meta.error) ?
      renderError(props.meta.error) : ''
    }
  </div>);
}

export function renderOptions(options) {
  return options.map((singleOption) => (
    <option value={singleOption.id} key={singleOption.id}> {singleOption.name} {(singleOption.country && singleOption) ? `- ${singleOption.country.name}` : ''}</option>
  ));
}
