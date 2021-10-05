import { ADD_FIELD, LOAD_ALL_FORMS, NEW_FORM, REMOVE_FIELD, SET_FORM } from './form.types';
import { FORM_MODES } from 'utils/constants/enums';

const initialState = {
    forms: [],
    currentForm: {},
    mode: FORM_MODES.NEW
};

const formReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case NEW_FORM: {
            return { ...state, currentForm: initialState.currentForm, mode: FORM_MODES.NEW }
        }
        case ADD_FIELD: {
            const { currentForm } = state;
            const {
                fieldName,
                  value,
            } = payload;
            currentForm[fieldName] = value 
            return {
                ...state,
                currentForm: {
                    ...currentForm
                }
            }
        }
        case REMOVE_FIELD: {

            const { fieldName } = payload;
            const { [fieldName]: _, ...currentForm } = state.currentForm;
            return { ...state, currentForm }
        }
        case LOAD_ALL_FORMS: {
            const { forms } = payload;
            return { ...state, forms };
        }
        case SET_FORM: {
            const { form } = payload;
            const { id, content } = form;
            return { ...state, currentForm: { id, ...content }, mode: FORM_MODES.EDIT };
        }
        default: {
            return state;
        }
    }
}

export default formReducer;
