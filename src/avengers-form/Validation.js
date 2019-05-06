import React from 'react';

export default function Validation({value, validations}) {
  return validations.map((validation, i) => {
    const val = validation(value);
    return val.isValid ? '' : 
      <ErrorInput key={i} error={val.error} />;
  })
}
export function isInputValid(validations, value) {
  const inValidFn = validations.find(val => val(value).isValid === false)
  return  inValidFn ? false : true;
}
export const required = () => {
  return (value) => ({
    isValid: (value  && value !== '') ? true : false,
    error: 'Hero is required'
  })
}
export const onlyLetters = () => {
  return (value) => ({
    isValid: onlyLetter(value),
    error: 'only letters loco',
  })
}

// ===== Private functions ====
function onlyLetter(text = '') {
  if(text === '') {
    return true;
  }
  const upperLowerSpace = /^[A-Za-z\s]+$/;
  return text.match(upperLowerSpace) ? true : false;
}
function ErrorInput({ error }) {
  return <div className='error-message'>{error}</div>
}
