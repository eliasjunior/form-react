import React from 'react';

export default function Validation({value, validations, name}) {
  return validations.map((validationFn, i) => {
    const valObject = validationFn(value, name);
    return valObject.isValid ? '' : 
      <ErrorInput key={i} error={valObject.error} />;
  })
}
export function isInputValid(validations, value) {
  const inValidFn = validations.find(val => val(value).isValid === false)
  return  inValidFn ? false : true;
}
export const required = (field) => {
  return (value, name) => ({
    isValid: (value  && value !== '') ? true : false,
    error: `${field ? field : name} is required`
  })
}
export const onlyLetters = (field) => {
  return (value, name) => ({
    isValid: onlyLetter(value),
    error: `${field ? field : name} accepts only letters loco`,
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
  return <div className='error-message'><div>{error}</div></div>
}
