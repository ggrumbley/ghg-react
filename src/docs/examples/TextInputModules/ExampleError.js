import React from 'react';
import TextInputModules from 'ghg-react/TextInputModules';

/** Required TextBox with error */
export default class ExampleError extends React.Component {
  render() {
    return (
      <TextInputModules
        htmlId="example-optional"
        label="First Name"
        name="firstname"
        onChange={() => {}}
        required
        error="First Name is required."
       />
    )
  }
}