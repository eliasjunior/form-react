import React from 'react';
import propTypes from 'prop-types'
import Validation, {isInputValid} from '../Validation';
export default class InputText extends React.Component {
  state = {
    isValid: false,
  }
  componentDidMount() {
    const {
      onInputValid,
      name,
    } = this.props;
    const {
      isValid,
    } = this.state
    // tells form parent if it is valid
    //onInputValid({isValid, name})
  }
  handleInput = (e) => {
    const {
      onChange,
      onInputValid,
      validations = [],
      name,
    } = this.props;
    const { value } = e.target;
    onChange(value);
    const isValid = isInputValid(validations, value);
    onInputValid({ isValid, name });
    this.setState({isValid})
  }
  render() {
    const {
      labelText,
      value,
      name,
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
            name={name}>
          </input>
        </div>
        <Validation 
          value={value} 
          name={name}
          validations={validations}>
        </Validation>
      </React.Fragment>
    )
  } 
}
InputText.propTypes = {
  name: propTypes.string.isRequired,
}
