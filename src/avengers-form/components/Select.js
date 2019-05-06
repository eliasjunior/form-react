import React from 'react';
import propTypes from 'prop-types';
import BaseComponent, {handleInput} from './BaseComponent';
import { FormContext } from '../AvengersForm';

export default function Select({
  labelText,
  name,
  placeholder,
  options,
  validations = [],
  onInputValid,
}) {
  const getClasses = (isValid) => {
    return isValid ? "base-input" : "base-input invalid";
  }
  return (
    <FormContext.Consumer>
      {({ form }) => {
        const value = form[name] && form[name].value;
        const isValid = form[name] && form[name].isValid;
        const onChange = form[name] && form[name].onChange;
        return <React.Fragment>
          <div className="form-row">
            <label className="label-field" htmlFor={name}> {labelText} </label>
            <select className={getClasses(isValid)}
              name={name}
              id={name}
              value={value}
              onChange={(e) => handleInput({
                value: e.target.value, 
                onChangeCallback: onChange, 
                validations
              })}>
              <option value="" disabled></option>
              {options.map(option => {
                return <option
                  value={option}
                  key={option}
                  label={option}>
                </option>
              })}
            </select>
          </div>
          <BaseComponent
            validations={validations}
            onInputValid={onInputValid}
            name={name}
            value={value}>
          </BaseComponent>
        </React.Fragment>
      }}
    </FormContext.Consumer>
  )
}
Select.propTypes = {
  name: propTypes.string.isRequired,
}