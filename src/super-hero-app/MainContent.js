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
export default function MainContent() {
  const handleSubmit = (payload) => {
    console.log('Submit FORM == ', payload)
  }
  return (
    <div className="hero-list">
      <AvengersForm
        onSubmit={handleSubmit}>
        <InputText
          name="addhero"
          value=''
          labelText="Add Hero"
          validations={validations}>
        </InputText>
        <Checkbox value="thor" labelText={'Thor'}></Checkbox>
        <Checkbox value="ironman" labelText={'Iron Man'}></Checkbox>
        <Select
          name="ship"
          value=''
          labelText={'Select a Ship'}
          options={options}
          validations={selectValidations}></Select>
        <Submit labelText="Add Hero"></Submit>
      </AvengersForm>
    </div>
  )
}