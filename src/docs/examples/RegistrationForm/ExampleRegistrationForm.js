
import React, { Component } from 'react';
import RegistrationForm from 'ghg-react/RegistrationForm';

export default class ExampleRegistrationForm extends Component {
  onSubmit = (user) => {
    console.log(user);
  }

  render() {
    return <RegistrationForm onSubmit={this.onSubmit} />
  }
}