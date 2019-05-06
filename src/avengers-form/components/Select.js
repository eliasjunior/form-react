import React from 'react';
import { BaseComponent } from './BaseComponent';
import { isInputValid } from '../Validation';
import { FormContext } from '../AvengersForm';

export default class Select extends React.Component {
  render() {
    const {
      labelText,
      name,
      placeholder,
      options,
      validations = [],
      onInputValid,
    } = this.props;

    const handleSelectChange = (e, onChangeCallback) => {
      const newValue = e.target.value;
      
      const isValid = isInputValid(validations, newValue);
      console.log('newValue', newValue, isValid)
      onChangeCallback({value: newValue, isValid});
      // TODO: review rule below
      // onInputValid({ isValid, name });
    }
    return (
      <FormContext.Consumer>
        {({form}) => {
          const value = form[name] && form[name].value;
          console.log('VALUE', value)
          const onChange = form[name] && form[name].onChange;
          return <React.Fragment>
            <div className="form-row">
              <label className="label-field" htmlFor={name}> {labelText} </label>
              <select className="base-input"
                name={name}
                value={value}
                onChange={(e) => handleSelectChange(e, onChange)}>
                <option value="" disabled>{placeholder}</option>
                {options.map(option => {
                  return <option
                    value={option}
                    key={option}
                    label={option}>
                  </option>
                })}
              </select>
              {labelText}
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
}