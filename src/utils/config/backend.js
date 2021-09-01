import { getEnv } from 'utils/env';

export const getBackendUrl = () => {
    const host = getEnv('BACKEND_URL', '127.0.0.1:8080');
    return `http://${host}`;
}

export const fetchOptions = (method = 'GET', body = null) => {
    const options = {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
        }
    };
    if (['PUT', 'POST'].includes(method.toUpperCase())) {
        return { ...options, body: JSON.stringify(body) };
    }
}
