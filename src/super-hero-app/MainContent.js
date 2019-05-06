import React from 'react';
import AvengersForm from '../avengers-form/AvengersForm';
import InputText from '../avengers-form/components/InputText';
import Submit from '../avengers-form/components/Submit';
import { required, onlyLetters } from '../avengers-form/Validation';

const validations = [required(), onlyLetters()];

export default class MainContent extends React.Component {
  state = {
    form: {
      name: ''
    }
  }
  handleInput = (name) => {
    const {
      form,
    } = this.state;
    form.name = name;
    this.setState({form});
  }
  handleSubmit(){
    console.log('Submit ** > ', this.state.form)
  }
  handleFormIsValid(isValid){
    console.log('Finally Submit ** > is ', isValid)
  }
  render() {
    const {
      form,
    } = this.state;
    return (
      <div className="hero-list">
        <AvengersForm 
          onSubmit={this.handleSubmit} 
          onValid={this.handleFormIsValid.bind(this)}>
          <InputText 
            value={form.name}
            labelText="Add Hero"
            onChange={this.handleInput}
            validations={validations}>
          </InputText>
          <Submit labelText="Add Hero"></Submit>
        </AvengersForm>
      </div>
    )
  }
}