import axios from 'axios';
import { BACKEND_URL } from 'utils/config/general';

export const postForm = async (form) => {
    try {
        const response = await axios.post(`${BACKEND_URL}/form`, form);
        return response.data;
    } catch(err) {
        console.error(err);
    }
}

export const deleteForm = async (formId) => {
    const response = await axios.delete(`${BACKEND_URL}/form/${formId}`);
    return response.data
}

export const loadAllForms = async () => {
    const response = await axios.get(`${BACKEND_URL}/form`);
    return response.data;
}

export const updateForm = async (formId, form) => {

    const response = await axios.put(`${BACKEND_URL}/form/${formId}`, form);
    return response.data;
}
