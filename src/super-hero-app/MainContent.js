import React from 'react';
import AvengersForm from '../avengers-form/AvengersForm';
import InputText from '../avengers-form/components/InputText';
import Submit from '../avengers-form/components/Submit';
import { required, onlyLetters } from '../avengers-form/Validation';
import Checkbox from '../avengers-form/components/Checkbox';
import Select from '../avengers-form/components/Select';

const validations = [required('Add Hero'), onlyLetters('Add Hero')];
const selectValidations = [required('Select Ship')];
const options = [
  'Thor Ship',
  'Iron Man Ship',
  'Black Panther Ship',
]
export default class MainContent extends React.Component {
  state = {
    form: {
      name: '',
      shipSelected: '',
    }
  }
  handleInput = (name) => {
    const {
      form,
    } = this.state;
    form.name = name;
    this.setState({form});
  }
  handleSubmit = () => {
    console.log('Submit FORM === ', this.state.form)
  }
  // handleFormIsValid = (isValid) => {
  //   console.log('handleFormIsValid ', isValid)
  // }
  handleSelectChange = (value) => {
    console.log('handleSelectChange', value)
    const newForm = {...this.state.form}
    newForm.shipSelected = value;
    this.setState({form: newForm})
  }
  render() {
    const {
      form,
    } = this.state;
    return (
      <div className="hero-list">
        <AvengersForm 
          onSubmit={this.handleSubmit}>
          <InputText 
            name="addtodo" 
            value={form.name}
            labelText="Add Hero"
            onChange={this.handleInput}
            validations={validations}>
          </InputText>
          <Checkbox value="thor" labelText={'Thor'}></Checkbox>
          <Checkbox value="ironman" labelText={'Iron Man'}></Checkbox>
          <Select 
            name="ship" 
            value={form.shipSelected}
            onChange={this.handleSelectChange} 
            placeholder={'Select a Ship'}
            options={options}
            validations={selectValidations}></Select>
          <Submit labelText="Add Hero"></Submit>
        </AvengersForm>
      </div>
    )
  }
}