import React from 'react';

export default function Checkbox({value, labelText}) {
  return (
    <React.Fragment>
      <div className="form-row">
        <label className="label-field" htmlFor={`check-${value}`}>
        <input className="base-input" 
          id={`check-${value}`} 
          name={`check-${value}`} 
          type="checkbox" value={value}></input>
        {labelText}
        </label> 
      </div>
    </React.Fragment>
  )
}