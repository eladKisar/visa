import { ADD_FIELD, NEW_FORM, REMOVE_FIELD, LOAD_ALL_FORMS, SET_FORM } from './form.types';
import { postForm, deleteForm, loadAllForms, updateForm } from 'services/form.service';

export const newForm = () => {
    return dispatch => {
        dispatch({ type: NEW_FORM });
    }
}

export const setForm = (form) => {
    return dispatch => {
        dispatch({
            type: SET_FORM,
            payload: {
                form
            }
        })
    }
}

export const addField = (fieldName,value) => {
     return dispatch => {
        dispatch({
            type: ADD_FIELD,
            payload: {
                fieldName,
                value,
            }
        })
    }
}

export const removeField = (fieldName) => {
    return dispatch => {
        dispatch({
            type: REMOVE_FIELD,
            payload: { fieldName }
        })
    }
}

export const getAllForms = () => {
    return async dispatch => {
        const forms = await loadAllForms();
        dispatch({
            type: LOAD_ALL_FORMS,
            payload: { forms }
        });
    }
}

export const createForm = (form) => {
    return async () => {
        await postForm(form);
        window.close();
    }
}

export const removeForm = (formId) => {
    return async dispatch => {
        await deleteForm(formId);
        getAllForms()(dispatch);
    }
}

export const editForm = (formId, form) => {
    return async () => {
        await updateForm(formId, form);
        window.close();
    }
}
