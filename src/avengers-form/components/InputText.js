import React from 'react';
import Validation, {isInputValid} from '../Validation';

export default class InputText extends React.Component {
  state = {
    isValid: false,
  }
  componentDidMount() {
    const {
      onInputValid
    } = this.props;
    console.log('componentDidMount isValid ', this.state.isValid)
    // tells form parent if it is valid
    onInputValid(this.state.isValid)
  }
  handleInput(e) {
    const {
      onChange,
      onInputValid,
      validations = [],
    } = this.props;
    const { value } = e.target;
    onChange(value);
    onInputValid(isInputValid(validations, value))
  }
  render() {
    const {
      labelText,
      value,
      validations = [],
    } = this.props;

    return (
      <React.Fragment>
        <div className="form-row">
          <label className="label-field" htmlFor="addHero">
            {labelText}
          </label>
          <input className="base-input" type="text"
            defaultValue={value} 
            onChange={this.handleInput.bind(this)} 
            name="addHero"></input>
        </div>
        <Validation 
          value={value} 
          validations={validations}>
        </Validation>
      </React.Fragment>
    )
  } 
}

