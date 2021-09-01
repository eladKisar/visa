import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import formsReducer from './forms/forms.reducer';
import authenticationReducer from './authentication/authentication.reducer';

const createRootReducer = (history) => combineReducers({
    router: connectRouter(history),
    forms: formsReducer,
    authentication: authenticationReducer,
})

export default createRootReducer;
