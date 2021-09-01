import { FORM_FIELDS } from './constants/form';

const isPartial = ({ content: form }) => {
    for (const { field } of FORM_FIELDS.filter(({ field }) => field !== 'id')) {
        if (!form[field]) {
            return true;
        }
    }
}

export const getStep = (form) => {
    if (isPartial(form)) return 'partial';
    return 'full';
}
