import React from 'react';
import Validation from '../Validation';

export class BaseComponent extends React.Component {
  state = {
    isValid: false,
  }
  componentDidMount() {
    const {
      onInputValid,
      name,
    } = this.props;
    // tells form parent if it is valid
    //onInputValid({name})
  }
  render() {
    const {
      value,
      name,
      validations,
    } = this.props;
    return  <Validation
    value={value}
    name={name}
    validations={validations}>
  </Validation>
  } 
}