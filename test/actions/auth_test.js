
import { expect } from '../test_helper';
import { AUTH_USER, UNAUTH_USER, AUTH_ERROR } from '../../src/actions/types';
import * as actions from '../../src/actions/auth_actions';
import {API_URL} from '../../src/config';
import sinon from 'sinon';

const fakeServer = sinon.fakeServer;


describe('Authentication Action Tests', ()=>{

    let server;
    before(()=>{
        server = fakeServer.create();
    })

    after(()=>{
        server.restore();
    });

    describe('sign up action tests', ()=>{
        it('signs up a user', ()=>{
            // const url = `${API_URL}/signup`;
            // server.respondWith("POST", url,
            //     [200, {'Content-Type': 'application/json'}, '{"token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1NzM4ZjQ3MTY5ZTUxNmNhNDE3NzFkYTEiLCJpYXQiOjE0NjMzNTAzODU2NjN9.EU1lDscTUet8kPOtvowCKEcKQVj2ZloeuuRl55vs7os"}'] )
            //
            //
            // const signup = actions.signUpUser({email: 'test@test.com', password: 'test123'});
            // sinon.spy(signup);
            // server.respond();
            /**
             * Figure out how to call the signup action
             * and intercept the message to the reducer
             */

        })
    })



});
