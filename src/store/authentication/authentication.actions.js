import { LOGIN, LOGOUT, REGISTER } from './authentication.types';
import { authenticate, signUp } from 'services/authentication.service';
import { history } from 'store/configure';

export const login = (username, password) => {
    return async dispatch => {
        const user = await authenticate(username, password);
        dispatch({
            type: LOGIN,
            payload: { user }
        });
    }
}

export const register = (username, password) => {
    return async dispatch => {
        const user = await signUp(username, password);
        dispatch({
            type: REGISTER,
            payload: { user }
        })
    }
}

export const logout = () => {
    return dispatch => {
        dispatch({ type: LOGOUT });
        history.push('/login');
    }
}
