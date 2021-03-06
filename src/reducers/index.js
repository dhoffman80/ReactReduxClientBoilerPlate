import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import authReducer from './auth_reducer';
import mainReducer from './main';

const rootReducer = combineReducers({
    form: form,
    auth: authReducer,
    main: mainReducer
});

export default rootReducer;
