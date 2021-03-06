/**
 * Created by David on 4/28/16.
 */
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions/auth_actions'

class SignIn extends Component{

    handleFormSubmit({email, password}){
        this.props.signInUser({email, password});
    }
    renderAlert(){
        if(this.props.errorMessage){
            return (
                <div className="alert alert-danger">
                    {this.props.errorMessage}
                </div>
            )
        }
    }

    render(){
        const { handleSubmit, fields: {email, password}} = this.props;
        return (
            <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                <fieldset className="form-group">
                    <label>Email: </label>
                    <input {...email} id="email" className="form-control" type="text"/>
                </fieldset>
                <fieldset className="form-group">
                    <label>Password: </label>
                    <input {...password} id="password" className="form-control" type="password"/>
                </fieldset>
                {this.renderAlert()}
                <button action="submit" className="btn btn-primary">Sign In </button>
            </form>
        );
    }
}

function mapStateToProps(state){
    return {errorMessage: state.auth.error};
}

export default reduxForm({
    form: 'signin',
    fields: ['email', 'password']
}, mapStateToProps, actions)(SignIn);
