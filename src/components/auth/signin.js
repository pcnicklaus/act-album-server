import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { Link } from 'react-router';
import * as actions from '../../actions';

class Signin extends Component {
  handleFormSubmit({ email, password }) {
    // Need to do something to log user in
    this.props.signinUser({ email, password });
  }

  renderAlert() {
    if (this.props.errorMessage) {
      return (
        <div className="alert__message">
          <strong>Oops!</strong> {this.props.errorMessage}
        </div>
      );
    }
  }

  render() {
    const { handleSubmit, fields: { email, password }} = this.props;

    return (
      <div className="signin">

        <div 
          className="uj__header__logo signin__header__logo" style={{position: 'absolute'}}>
          <h1 className="uj__header__logo__do">do</h1>
          <h1 className="uj__header__logo__thank">thank</h1>
        </div>
        <div className="signin__container">

          <h1 className="uj__header__logo__mobile">Sign In</h1>

            <form
              className="signinForm" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}
            >

              <div className="signinForm__fields__box">

                <div className="uj__header__logo signinForm__logo">
                  <h1 className="uj__header__logo__do">do</h1>
                  <h1 className="uj__header__logo__thank">thank</h1>
                  
                </div>

                <fieldset className="signinForm__field">
                    <label className="signinForm__field__label">Email:</label>
                    <input {...email} className="signinForm__field__input" />
                </fieldset>
                <fieldset className="signinForm__field">
                    <label className="signinForm__field__label">Password:</label>

                    <input {...password} type="password" className="signinForm__field__input" />
                </fieldset>

                {this.renderAlert()}

                <div className="signinForm__button">
                  <button className="signinForm__button__cancel button__cancel" ><Link to={'/'}>Cancel</Link></button>
                  
                  <button action="submit" className="signinForm__button__submit button__submit" >Sign in</button>

                </div>
              </div>
            </form>
        </div>

      </div>
    );
  }
}


function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}

export default reduxForm({
  form: 'signin',
  fields: ['email', 'password']
}, mapStateToProps, actions)(Signin);
