import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

// import { browserHistory } from 'react-router';

import * as actions from '../actions'

// import './act_form.css';

const label = `{
  <div>
     <span>I accept the </span>
     <Link to={'/terms'}>terms of use</Link>
     <span> and </span>
     <Link to={'/privacy'}>privacy policy</Link>
  </div>
}`

const FORM_FIELDS = {

  title: {
    type: 'input',
    label: 'Name it... (title)',
    class: 'actForm__field__title'
  },
  description: {
    type: 'input',
    label: 'What was it? (description)',
    class: 'actForm__field__description',
  },
  imageURL: {
    type: 'input',
    label: `Image link ${<a href="https://ctrlq.org/images/" target="_blank">(good service)</a>}`,
    class: 'actForm__field__image'
  }
}

class ActForm extends Component {

  handleFormSubmit(formData) {
    console.log('formData', formData)
    const { resetForm } = this.props;
    this.props.createAct(formData, () => {
        console.log('this.prop asdfdfdffdfs', this.props);

       this.props.resetForm(); 
      //  this.props.fetchUserActs()
      this.props.history.push('/journal')
      });
  }

  renderField(configObject, field) {
    //there's one field helper per field. it has all the good stuff
    const fieldHelper = this.props.fields[field]

    return (
      <div 
        className={`actForm__field  ${configObject.class} ${ fieldHelper.touched && fieldHelper.invalid ? 'has-danger' : '' }`} 
        key={ configObject.label }
      >
        <label className="actForm__field__label">
          { configObject.label }
        </label>
        <configObject.type 
          type={ configObject.type } 
          className={`actForm__field__input ${ configObject.class }`}
          {...fieldHelper} 
          style={{ boxSizing: 'border-box', padding: '0 5px' }}
        />
        
      </div>
    )
  }
  // <div className="actForm__text-help">
  //   { fieldHelper.touched ? fieldHelper.error : '' }
  // </div>

  render() {

    const { handleSubmit } = this.props;

    return (
      <div className="actForm__container">
      
        <div className="actForm__container__title">
          <h3>New Act</h3>
        </div>

        <div>

          <form
            className="actForm"
            onSubmit={ handleSubmit(this.handleFormSubmit.bind(this)) }
          >
            <div className="actForm__body">

              <div className="actForm__radio__buttons" >
                What kind of act...
                <div className="actForm__radio__container">
                  <input id="radio-1" name="kind" type="radio" className="actForm__radio__input" value="do" />
                  <label htmlFor="radio-1" className="actForm__radio__label">Do</label>
                </div>

                <div className="actForm__radio__container">
                  <input id="thank" name="kind" type="radio" className="actForm__radio__input" value="thank" />
                  <label htmlFor="thank" className="actForm__radio__label">Thank</label>
                </div>

              </div>

              <div className="actForm__radio__buttons" >
                Is it okay to share?
                <div className="actForm__radio__container">
                  <input id="share" name="share" type="radio" className="actForm__radio__input" value="share" />
                  <label htmlFor="share" className="actForm__radio__label">Share</label>
                </div>

                <div className="actForm__radio__container">
                  <input id="private" name="share" type="radio" className="actForm__radio__input" value="private" />
                  <label htmlFor="private" className="actForm__radio__label">Private</label>
                </div>

              </div>

              { _.map(FORM_FIELDS, this.renderField.bind(this)) }

               
            </div>
            <button action="submit" className="actForm__create__button">Create</button>

          </form>

        </div>

      </div>
    );
  }
}

const styles = {
  title: {
    fontSize: 6 + 'em',
    fontFamily: 'Dosis',
  },

  form: {
    fontSize: 1.2 + 'em',
    fontWeight: 'bold',
  }

}


function validate(values) {
  const errors = {};

  _.map(FORM_FIELDS, (field, value) => {
    if(!values[value]) {
      errors[value] = `enter a ${value}`
    }
  })

  return errors;
}

function mapStateToProps(state) {
  // console.log('state act form', state)
  // return {
  //   user: state.auth.user
  // }
  return state;
}
export default reduxForm({
  form: 'actForm',
  fields: [ 'title', 'description', 'imageURL', 'kind', 'share' ],
  validate
}, mapStateToProps, actions)(ActForm);

//// Dosis|Droid+Sans|Lobster|Nunito|PT+Sans+Narrow|Quicksand|Shadows+Into+Light|Varela+Round
