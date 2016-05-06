import axios from 'axios';
import { browserHistory } from 'react-router';
import { AUTH_USER, UNAUTH_USER, AUTH_ERROR } from './types';
import { API_URL, DEFAULT_LANDING } from '../config';



/**
 * Submit email and password to server
 * If auth - Update state, save JWT, redirect to route
 * If auth failed  - show an error
 * @param email
 * @param password
 */
export function signInUser({email, password}, redirectUrl = DEFAULT_LANDING){
    return function(dispatch){ //using redux thunk for longer running processing
        axios.post(`${API_URL}/signin`, {email, password}) //same as {email: email, password: password}
            .then(response => {

                dispatch({type: AUTH_USER});

                localStorage.setItem('token', response.data.token);
                browserHistory.push(redirectUrl);

            })
            .catch(()=>{
                dispatch(authError('There was a problem with your email or password'));
            });
    }

}
/**
 * Assumes validated form data. Creates a new user with the give password
 * Shows a server error if one exists
 *
 * @param email
 * @param password
 * @param passwordConfirm
 * @param redirctUrl
 * @returns {Function}
 */
export function signUpUser({email, password}, redirectUrl = DEFAULT_LANDING){
    return function(dispatch){
        axios.post(`${API_URL}/signup`, {email, password}) //same as {email: email, password: password}
            .then(response => {

                dispatch({type: AUTH_USER});

                localStorage.setItem('token', response.data.token);
                browserHistory.push(redirectUrl);

            })
            .catch(response=>{
                dispatch(authError(response.data.error));
            });
    }

}

/**
 * If there is an auth error then shown an error
 *
 */

export function authError(error){
    return {
        type: AUTH_ERROR,
        payload: error
    }
}

export function signOutUser(){
    localStorage.removeItem('token');
    return {
        type: UNAUTH_USER
    }
}
