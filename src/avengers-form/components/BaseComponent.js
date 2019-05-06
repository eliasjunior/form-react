import React from 'react';
import Validation, { isInputValid } from '../Validation';

export default function BaseComponent({
  value,
  name,
  validations,
}) {
  return <Validation
    value={value}
    name={name}
    validations={validations}>
  </Validation>
}

export function handleInput({ value, onChangeCallback, validations }) {
  const isValid = isInputValid(validations, value);
  console.log('newValue', value, isValid)
  onChangeCallback({ value, isValid });
}