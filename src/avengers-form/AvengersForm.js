import React from 'react';
import { validation } from './helper';
import './Avengers.css';

export const FormContext = React.createContext({
  isValid: false,
});

export default class AvengersForm extends React.Component {
  state = {
    isValid: false,
  }
  render() {
    const {
      children = validation('form children'),
      onSubmit = validation('onSubmit'),
      onValid,
    } = this.props;
    const handleSubmit = (e) => {
      e.preventDefault();
      onSubmit();
    }
    const handleIsValid = (isValid) => {
      this.setState({ isValid })
      //if the component subscribed form isValid 
      onValid && onValid(isValid)
    }
    return (
      <FormContext.Provider value={this.state}>
        <Context
          children={children}
          handleSubmit={handleSubmit}
          handleIsValid={handleIsValid}>
        </Context>
      </FormContext.Provider>
    )
  }
}

function Context({ children, handleSubmit, handleIsValid }) {
  return <div className="form-content">
    <form name="avengersForm" className="avengers-form" onSubmit={handleSubmit} >
      {React.Children.map(children, (child) => {
        if (child.type.idName === 'submit-btn') {
          return child
          // return React.cloneElement(child, {isFormValid: this.state.isValid});
        } else {
          return React.cloneElement(child, { onInputValid: handleIsValid });
        }
      })}
    </form>
  </div>
}