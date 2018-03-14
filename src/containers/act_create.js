import React, { Component } from 'react';  
import { Field, reduxForm, initialize } from 'redux-form';  
import { connect } from 'react-redux';  
import * as actions from '../actions';  

class ReduxFormTutorial extends Component {

    componentDidMount() {
        this.handleInitialize();
    }

    handleInitialize() {
        const initData = {
            "firstName": 'null',
            "lastName":  'null',
            "sex": 'null',
            "email": 'null',
            "phoneNumber": 'null'
        };

        this.props.initialize(initData);
    }

    //our other functions will go here
    renderField = field => (  
        <div>
          <label>{ field.input.label }</label>
          <input { ...field.input }/>
          { field.touched && field.error && <div className="error">{ field.error }</div> }
        </div>
    );

    renderSelect = field => (  
        <div>
          <label>{ field.input.label }</label>
          <select { ...field.input }/>
          { field.touched && field.error && <div className="error">{ field.error }</div> }
        </div>
    );

    handleFormSubmit(formProps) {
        this.props.submitFormAction(formProps);
      }
  
    render() {
        const { handleSubmit } = this.props;  
  
        return (
            <div>
            <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
    
              <Field name="firstName" type="text" component={this.renderField} label="First Name"/>
              <Field name="lastName" type="text" component={this.renderField} label="Last Name"/>
              <Field name="sex" component={this.renderSelect} label="Gender">
                <option></option>
                <option name="male">Male</option>
                <option name="female">Female</option>
              </Field>
              <Field name="email" type="email" component={this.renderField} label="Email" />
              <Field name="phoneNumber" type="tel" component={this.renderField} label="Phone Number"/>
    
              <button action="submit">Save changes</button>
            </form>
          </div>
        )
    }
    
}

function validate(formProps) {  
    const errors = {};

    if (!formProps.firstName) {
    errors.firstName = 'Please enter a first name';
    }

    if (!formProps.lastName) {
    errors.lastName = 'Please enter a last name';
    }

    if (!formProps.email) {
    errors.email = 'Please enter an email';
    }

    if (!formProps.phoneNumber) {
    errors.phoneNumber = 'Please enter a phone number'
    }

    if(!formProps.sex) {
    errors.sex = 'You must enter your sex!'
    }

    return errors;
}

const form = reduxForm({  
    form: 'ReduxFormTutorial',
    validate
});

function mapStateToProps(state) {  
    return {
        user: state.user
    };
}



export default connect(mapStateToProps, actions)(form(ReduxFormTutorial));  

  