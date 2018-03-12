import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

class Signin extends Component {
  handleFormSubmit({ email, password }) {
    // Need to do something to log user in
    this.props.signinUser({ email, password });
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

  render() {
    const { handleSubmit, fields: { email, password }} = this.props;

    return (
      <div className="signin">
        <div className="container">

          <div className="center">

            <form
              style={ styles }
              className="signinForm" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}
            >
              <object
                className="center-block"
                type="image/svg+xml" data="../images/callup_logo_white.svg"
                width="40%"
                ></object>
              <fieldset className="form-group">
                  <label style={{ color: '#fff', fontSize: 1.2 +'em', marginLeft: 5 }}>Email:</label>
                  <input {...email} className="form-control" style={{ width: 94 + '%' }} />
              </fieldset>
              <fieldset className="form-group">
                  <label style={{ color: '#fff', fontSize: 1.2 +'em', marginLeft: 5,  }}>Password:</label>

                  <input {...password} type="password" className="form-control" style={{ width: 94 + '%'}} />
              </fieldset>
              {this.renderAlert()}
              <button action="submit" className="btn" style={{ backgroundColor: '#004687', color: '#fff', fontFamily: 'Comfortaa', fontSize: 1.2 + 'em' }}>Sign in</button>
            </form>

          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  borderRadius: 25,
  backgroundColor: '#ff442c',
  padding: 30,
  marginTop: 140
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}

export default reduxForm({
  form: 'signin',
  fields: ['email', 'password']
}, mapStateToProps, actions)(Signin);
