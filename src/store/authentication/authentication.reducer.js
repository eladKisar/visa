import { LOGIN, LOGOUT, REGISTER } from './authentication.types';
import { loadUser, storeUser } from 'services/authentication.service';

const initialState = {
    user: loadUser(),
};

const authenticationReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case LOGIN: {
            storeUser(payload.user);
            return { ...state, user: payload.user };
        }
        case REGISTER: {
            storeUser(payload.user);
            return { ...state, user: payload.user };
        }
        case LOGOUT: {
            storeUser(null);
            return { ...state, user: null };
        }
        default: {
            return state;
        }
    }
}

export default authenticationReducer;
