import React from 'react';
import propTypes from 'prop-types'
import { FormContext } from '../AvengersForm';
import BaseComponent, {handleInput} from './BaseComponent';
export default function InputText({
  labelText,
  name,
  validations = [],
}) {
  const getClasses = (isValid) => {
    return isValid ? "base-input" : "base-input invalid" 
  }
  return (
    <FormContext.Consumer>
      {({ form }) => {
        const value = form[name] && form[name].value;
        const isValid = form[name] && form[name].isValid;
        const onChange = form[name] && form[name].onChange;
        return <React.Fragment>
          <div className="form-row">
            <label className="label-field" htmlFor="addHero">
              {labelText}
            </label>
            <input className={getClasses(isValid)} type="text"
              defaultValue={value}
              name={name}
              onChange={(e) => handleInput({
                value: e.target.value, 
                onChangeCallback: onChange, 
                validations
              })}>
            </input>
          </div>
          <BaseComponent
            validations={validations}
            name={name}
            value={value}>
          </BaseComponent>
        </React.Fragment>
      }}
    </FormContext.Consumer>
  )
}
InputText.propTypes = {
  name: propTypes.string.isRequired,
}
