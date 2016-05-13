/**
 * Created by David on 5/5/16.
 */

import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions/auth_actions'

class SignUp extends Component {

    renderAlert(){
        if(this.props.errorMessage){
            return (
                <div className="alert alert-danger">
                    {this.props.errorMessage}
                </div>
            )
        }
    }


    handleFormSubmit({email, password}){
        this.props.signUpUser({email, password});
    }

    render(){
        const { handleSubmit, fields: {email, password, passwordConfirm}} = this.props;
        return (
            <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                <fieldset className="form-group">
                    <label>Email: </label>
                    <input {...email} id="email" className="form-control" type="text"/>
                    {email.touched && email.error && <div className="error">{email.error}</div>}
                </fieldset>
                <fieldset className="form-group">
                    <label>Password: </label>
                    <input {...password} id="password" className="form-control" type="password"/>
                    {password.touched && password.error && <div className="error">{password.error}</div>}
                </fieldset>
                <fieldset className="form-group">
                    <label>Confirm Password: </label>
                    <input {...passwordConfirm} id="confirmPassword" className="form-control" type="password"/>
                    {passwordConfirm.touched && passwordConfirm.error && <div className="error">{passwordConfirm.error}</div>}
                </fieldset>
                {this.renderAlert()}
                <button action="submit" className="btn btn-primary">Sign Up </button>
            </form>);
    }

}

function validate(fields){
    const errors = {};

    if(!fields.email ){
        errors.email = "Please enter an email";
    }
    if(!fields.password ){
        errors.password = "Please enter a password";
    }
    if(!fields.passwordConfirm ){
        errors.passwordConfirm = "Please enter a password confirmation";
    }
    if(fields.password != fields.passwordConfirm){
        errors.password = "Passwords do not match";
    }


    return errors;
}

function mapStateToProps(state){
    return {errorMessage: state.auth.error};
}

export default reduxForm({
    form: 'signup',
    fields: ['email', 'password', 'passwordConfirm'],
    validate: validate
}, mapStateToProps, actions)(SignUp);
