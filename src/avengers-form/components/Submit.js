import React from 'react';
import { FormContext } from '../AvengersForm';

function Submit({
  labelText,
}) {
  return (
    <FormContext.Consumer>
      {({ isValid }) => (
        <input className="btn btn-submit"
          disabled={!isValid}
          value={labelText}
          type="submit"
          name="form-submit">
        </input>
      )}
    </FormContext.Consumer>
  )
}
Submit.idName = 'submit-btn';
export default Submit;
