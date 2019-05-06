import React from 'react';
import { validation } from './helper';
import './Avengers.css';

export const FormContext = React.createContext({
  form: {},
});

export default class AvengersForm extends React.Component {
  state = {
    isMounted: false,
    form: {},
  }
  componentDidMount() {
    const form = {...this.state.form };
    this.props.children.forEach(child => {
      const {
        props
      } = child;
      if(props.name && !form[props.name]) {
        form[props.name] = {
          isValid: false,
          value: props.value,
          onChange: ( {value, isValid} ) => {
            form[props.name].value = value;
            form[props.name].isValid = isValid;
            console.log(form[props.name])
            // check the whole form is valid
            const isThereInvalid = Object.entries(form)
              .filter( ([key, content]) => !content.isValid)
            form.isValid = isThereInvalid.length === 0;
            this.setState({ form });
          }
        }
      }
      this.setState({ isMounted: true, form });
    })
    this.props.onValid &&
      this.props.onValid(this.state.inValidComponents.length === 0);
    console.log('componentDidMount inValidComponents', this.state.inValidComponents)
  }
  render() {
    const {
      children = validation('form children'),
      onSubmit = validation('onSubmit'),
      onValid,
    } = this.props;
    const {
      form,
    } = this.state;
    const handleSubmit = (e) => {
      e.preventDefault();
      onSubmit();
    }
    // const handleIsValid = ({ isValid, name }) => {
    //   if (this.state.isMounted) {
    //     //TODO: should not call here first time
    //     const form = {...this.state.form};

    //     if (isValid) {
    //       newList = inValidComponents
    //         .filter(componentName => componentName !== name)
    //     } else {
    //       const found = inValidComponents.find(componentName => componentName === name);
    //       if (!found) {
    //         newList = [...inValidComponents];
    //         newList.push(name);
    //       }
    //     }

    //     console.log('inValidComponents ' + name, newList)
    //     onValid && onValid(newList.length === 0);
    //     //if the component subscribed form isValid 
    //     console.log('handleIsValid', newList.length === 0)
    //     this.setState({ inValidComponents: newList })
    //   }
    // }
    return (
      <FormContext.Provider value={this.state}>
        <Context
          children={children}
          handleSubmit={handleSubmit}
          // handleIsValid={handleIsValid}
          form={form}>
        </Context>
      </FormContext.Provider>
    )
  }
}

function Context({ children, handleSubmit, handleIsValid }) {
  return (
    <form name="avengersForm" className="avengers-form" onSubmit={handleSubmit} >
      <div className="form-content">
        {React.Children.map(children, (child) => {
          if (child.type.idName === 'submit-btn') {
            return child
            // return React.cloneElement(child, {isFormValid: this.state.isValid});
          } else {
            return React.cloneElement(child, { onInputValid: handleIsValid});
          }
        })}
      </div>
    </form >
  )
}