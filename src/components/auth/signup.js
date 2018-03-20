import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { Link } from 'react-router';
import * as actions from '../../actions';

import './auth.css';

const FIELDS = {
  email: {
    type: null,
    label: 'Email goes here'
  },
  name: {
    type: null,
    label: 'What\'s your name?'
  },
  password: {
    type: 'password',
    label: 'Password, por favor'
  },
  passwordConfirm: {
    type: 'password',
    label: 'Rinse and repeat :)'
  }
}

class Signup extends Component {

  handleFormSubmit(formProps) {
    // Call action creator to sign up the user!
    this.props.signupUser(formProps);
  }

  renderAlert() {
    if (this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          <strong>Oops!</strong> {this.props.errorMessage}
        </div>
      );
    }
  }

  renderField(fieldConfig, field) {
    const fieldHelper = this.props.fields[field];
    return (
            <fieldset className="signupForm__field" key={fieldConfig.label}>
              <label className="signupForm__field__label">{ fieldConfig.label }</label>

                <input 
                  type={fieldConfig.type} className="signupForm__field__label__input"  {...fieldHelper} />
                {fieldHelper.touched && fieldHelper.error && <div className="error">Oops... {fieldHelper.error}</div>}

            </fieldset>
    )
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div className="signup">
        <div className="uj__header__logo signup__header__logo"  style={{position: 'absolute'}}>
          <h1 className="uj__header__logo__do">do</h1>
          <h1 className="uj__header__logo__thank">thank</h1>
          <h1 className="uj__header__logo__mobile">Sign In</h1>
        </div>
        <div className="signup__container">
          <form
            className="signupForm" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}
          >

            <div className="signupForm__fields__box">

              <div className="uj__header__logo signupForm__logo">
                <h1 className="uj__header__logo__do">do</h1>
                <h1 className="uj__header__logo__thank">thank</h1>
              </div>

              { _.map(FIELDS, this.renderField.bind(this)) }
              {this.renderAlert()}

              <div className="signupForm__button">
                <button className="signinForm__button__cancel button__cancel" ><Link to={'/'}>Cancel</Link></button>
                
                <button action="submit" className="signupForm__button__submit button__submit" >Sign up!</button>

              </div>

              
            </div>

           

          </form>
        </div>
      </div>
    );
  }
}

// <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
//    <!-- Created with SVG-edit - http://svg-edit.googlecode.com/ -->
//    <g>
//       <title>Layer 1</title>
//       <ellipse ry="30" rx="30" id="svg_1" cy="50" cx="50" stroke-width="5" stroke="#000000" fill="#FF0000"/>
//    </g>
//  </svg>
const styles = {
  borderRadius: 25,
  background: '#ff442c',
  padding: 30,
  marginTop: 110,

  // width: 200,
  // height: 150,
}

function validate(formProps) {
  const errors = {};

  if (formProps.password !== formProps.passwordConfirm) {
    errors.password = 'Passwords must match';
  }

  _.each(FIELDS, (type, field) => {
    if (!formProps[field]) {
      errors[field] = `Enter a ${field}`
    }
  })

  return errors;
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}

export default reduxForm({
  form: 'signup',
  fields: _.keys(FIELDS),
  validate
}, mapStateToProps, actions)(Signup);
