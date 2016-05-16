/**
 * Testing the signup component
 *
 */


import { renderComponent, expect } from '../../test_helper';
import SignUp from '../../../src/components/auth/signup';


describe('Sign Up Tests', ()=>{
    let signup, email, password, confirmPassword;

    beforeEach(()=>{
        signup = renderComponent(SignUp);
        email = signup.find('#email');
        password = signup.find('#password');
        confirmPassword = signup.find('#confirmPassword');
    });
    it('has an email field', ()=>{
        expect(email).to.exist;
    });
    it('has password fields', ()=>{
        expect(password).to.exist;
        expect(confirmPassword).to.exist;
    });
});

