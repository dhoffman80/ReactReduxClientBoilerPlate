
import { renderComponent, expect } from '../../test_helper';
import SignIn from '../../../src/components/auth/signin';

describe('Sign In Tests', ()=>{
    let signin, email, password;
    beforeEach(()=>{
        signin = renderComponent(SignIn);
        email = signin.find('#email');
        password = signin.find('#password');
    });
    it('has sign in fields', ()=>{
        expect(email).to.exist;
        expect(password).to.exist;
    });

});
