import React from 'react';
import { FormContext } from '../AvengersForm';
import './styles/Components.css';

function Submit({
  labelText,
}) {
  return (
    <FormContext.Consumer>
      {({ form }) => (
        <input className="btn btn-submit"
          disabled={!form.isValid}
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
