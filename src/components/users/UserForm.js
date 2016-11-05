import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class UserForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={ handleSubmit }>
        <div>
          <label htmlFor="username">Username</label>
          <Field name="username" component="input" type="text" />
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

UserForm = reduxForm({
  form: 'user'
})(UserForm);

export default UserForm;
