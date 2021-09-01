import axios from 'axios';
import { toast } from 'react-toastify';
import { BACKEND_URL } from 'utils/config/general';
import { USER_ERRORS } from 'utils/constants/errors';

const USER_KEY = 'user';

export const authenticate = async (username, password) => {
    try {
        const response = await axios.post(`${BACKEND_URL}/user/login`, { username, password });
        return response.data;
    } catch(exception) {
        if (!exception.isAxiosError) {
            console.error(exception);
            return null;
        }
        const { response } = exception;
        if (response.status === 401) {
            toast.error('משתמש או סיסמא לא נכונים.');
        }
        return null;
    }
}

export const signUp = async (username, password) => {
    try {
        const response = await axios.post(`${BACKEND_URL}/user/register`, { username, password });
        if (response.status === 201) return response.data;
    } catch(exception) {
        if (!exception.isAxiosError) {
            console.error(exception);
            return null;
        }
        const { response } = exception;
        const { error } = response.data;
        switch(error) {
            case USER_ERRORS.user_exists: {
                toast.error('שם המשתמש כבר קיים');
                return null;
            }
            default: {
                return null;
            }
        }
    }
}

export const loadUser = () => {
    try {
        const user = JSON.parse(localStorage.getItem(USER_KEY));
        if (!user) return null;
        return user;
    } catch {
        return null;
    }
}

export const storeUser = (user) => {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
}
