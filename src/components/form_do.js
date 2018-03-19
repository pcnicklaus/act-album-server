import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions'

import './auth/auth.css';

class DoForm extends Component {

    state = {
        kind: 'do',
        visibility: 'share',
        name: '',
        title: '',
        description: '',
        image: ''
    }

    handleChange = (e) => {
        let newState = {};
        newState[e.target.name] = e.target.value;
        this.setState(newState);
        // console.log('ths.state in handle change', this.state)
    };

    async createNewAct() {
        // const callup_id = this.props.params.id;
        const formData = { 
            name: this.state.name, 
            kind: this.state.kind, 
            visibility: this.state.visibility,
            title: this.state.title,
            description: this.state.description,
            image: this.state.image
        };
    
        const callback = async () => {
          await this.props.fetchActs();
          const newState = {name:'', visibility:'share', title: '', description: '', image: '' };
          this.setState(newState);
          console.log('this.props callback', this.props)
          this.props.history.push('/journal');
        }
    
        await this.props.createAct(formData, callback);

    }


    render() {
        return (
        <div>
            <div className="home__header">
                <div className="home__header__logo">
                    <h1 className="home__header__logo__do">do</h1>
                    <h1 className="home__header__logo__thank">thank</h1>
                </div>
            </div>

            <div className="thankForm">

                <div className="thankForm__content">

                    <div className="thankForm__title">
                        <h1>Do</h1>
                        <p>help, act, deeds, join, good...</p>
                    </div>
                    
                    <div className="thankForm__body">
                        <div className='form__fieldset__radios'>
                            <fieldset className='fieldset__radios'>
                                
                                <input id="visibility" name="visibility" type="radio" className="actForm__radio__input" value="share" onChange={this.handleChange}  />
                                <label htmlFor="visibility" className="actForm__radio__label">Share</label>
                            
                                <input id="visibility" name="visibility" type="radio" className="actForm__radio__input" value="private" onChange={this.handleChange}  />
                                <label htmlFor="private" className="actForm__radio__label">Private</label>
                            
                            </fieldset>
                        </div>
                        
                        <fieldset className='form__fieldset'>
                            <label className="form__label">Name</label>
                            <input id='formName' className='form__input' name='name' type='text' required onChange={this.handleChange} value={this.state.name} />
                        </fieldset>
                        <fieldset className='form__fieldset'>
                            <label className="form__label">Title</label>
                            <input
                            id='formEmail' className='form__input' name='title' type='text'  onChange={this.handleChange} value={this.state.title} />
                        </fieldset>
                        <fieldset className='form__fieldset'>
                            <label className="form__label image__label">
                            Image URL 
                                <span>You can upload your image  
                                    <a href="https://ctrlq.org/images/" target="_blank">
                                    here
                                    </a>. We hope to be able to host them soon!
                                </span>
                            </label>
                            <input id='formImage' className='form__input' name='image' type='text'  onChange={this.handleChange} value={this.state.image} />
                        </fieldset>
                        <fieldset className='form__fieldset'>
                            <label className="form__label">Description</label>
                            <textarea id='formDescription' className='form__input' rows="4" name='description' type='textarea'  onChange={this.handleChange} value={this.state.description} />
                        </fieldset>

                        
                        <div className="form__buttons">
                            <button
                                type="button"
                                className="form__buttons__cancel"
                                onClick={ () => { 
                                    
                                    this.props.history.push('/') } }
                                
                            >
                                <p>Cancel</p>
                            
                            </button>
                            
                            <button
                                type="button"
                                className="signinForm__button__submit"
                                onClick={() => this.createNewAct() }
                            >
                                <p>Create</p>
                            </button>
                        </div>
                        
                    
                    </div>
                </div>

            </div>
            
        </div>
        )
    }

}



  
export default connect(null, actions)(DoForm)

