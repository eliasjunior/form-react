import React from 'react';
import { FormContext } from '../AvengersForm';
import './styles/Components.css';

function Submit({
  labelText,
}) {
  const getClasses = (isDisabled) => {
    return isDisabled ? 'btn btn-submit-disabled' : 'btn btn-submit';
  }
  return (
    <FormContext.Consumer>
      {({ form }) => (
        <div className="form-row">
          <input className={getClasses(!form.isValid)}
            disabled={!form.isValid}
            value={labelText}
            type="submit"
            name="form-submit">
          </input>
        </div>
      )}
    </FormContext.Consumer>
  )
}
Submit.idName = 'submit-btn';
export default Submit;
