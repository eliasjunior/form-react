import React from 'react';
import { validation } from './helper';
import './Avengers.css';

export const FormContext = React.createContext({
  form: {},
});
export default class AvengersForm extends React.Component {
  state = {
    form: {},
  }
  componentDidMount() {
    const form = { ...this.state.form };
    createStateForFormChildren({
      children: this.props.children, 
      form, 
      context: this,
    })
    this.setState({ form: setFormValidState({ form }) });
    this.props.onValid &&
      this.props.onValid(form.isValid);
  }
  render() {
    const {
      children = validation('form children'),
      onSubmit = validation('onSubmit'),
    } = this.props;
    const {
      form,
    } = this.state;
    const handleSubmit = (e) => {
      e.preventDefault();
      const formValues = Object
        .entries(form)
        .map(([key, content]) => content.value)
      onSubmit(formValues);
    }
    return (
      <FormContext.Provider value={this.state}>
        <Context
          children={children}
          handleSubmit={handleSubmit}
          form={form}>
        </Context>
      </FormContext.Provider>
    )
  }
}

// === Private functions
function createStateForFormChildren({children, form, context}) {
  children.forEach(child => {
    const {
      props
    } = child;
    if (props.name && !form[props.name]) {
      form[props.name] = {
        isValid: false,
        value: props.value,
        onChange: ({ value, isValid }) => {
          const { name } = props;
          setFormComponentsState({ form, value, isValid, name })
          context.setState({ form: setFormValidState({ form }) });
        }
      }
    }
  })
}
function setFormComponentsState({ form, value, isValid, name }) {
  const newForm = { ...form };
  newForm[name].value = value;
  newForm[name].isValid = isValid;
  return newForm
}

function setFormValidState({ form }) {
  const newForm = { ...form }
  // check the whole form is valid
  const isThereInvalid = Object.entries(newForm)
    .filter(([key, content]) => !content.isValid)
  newForm.isValid = isThereInvalid.length === 0;
  return newForm;
}

function Context({ children, handleSubmit }) {
  return (
    <form name="avengersForm" className="avengers-form" onSubmit={handleSubmit} >
      <div className="form-content">
        {children}
      </div>
    </form >
  )
}