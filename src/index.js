import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import reduxThunk from 'redux-thunk';


import {DEFAULT_LANDING} from './config';
import App from './components/app';
import SignIn from './components/auth/signin';
import SignOut from './components/auth/signout';
import SignUp from './components/auth/signup';
import Main from './components/main';
import RequireAuth from './components/auth/require_auth';
import Welcome from './components/welcome';
import reducers from './reducers';
import { AUTH_USER } from './actions/types';


const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);
const token = localStorage.getItem('token');
//if they have a token, log them in.
if(token){
    store.dispatch({type: AUTH_USER});
}

ReactDOM.render(
  <Provider store={store}>
      <Router history={browserHistory}>
          <Route path="/" component={App}>
              <IndexRoute component={Welcome}/>
              <Route path="/signin" component={SignIn}/>
              <Route path="/signout" component={SignOut}/>
              <Route path="/signup" component={SignUp}/>
              <Route path={DEFAULT_LANDING} component={RequireAuth(Main)}/>
          </Route>
      </Router>
  </Provider>
  , document.querySelector('.container'));
