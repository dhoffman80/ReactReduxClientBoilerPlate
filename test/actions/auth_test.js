/**
 * Testing authentication pages
 * Using sinon to create a fake server
 * for responses
 *
 */


import { renderComponent, expect } from '../test_helper';
import sinon from 'sinon';
import SignIn from '../../src/components/auth/signin';
import SignUp from '../../src/components/auth/signup';

const fakeServer = sinon.fakeServer;

describe('Authentication Tests', ()=>{

    let server;
    before(()=>{
        server = fakeServer.create();
    })

    after(()=>{
        server.restore();
    });
    describe('Signup Tests', ()=>{
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



});
