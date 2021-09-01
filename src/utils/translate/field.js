import { SEVERITY_OPTIONS } from 'utils/constants/form';

export const translateField = (value) => {
    for (const option of SEVERITY_OPTIONS) {
        if (option.value === value) return option.label;
    }
    return value;
}
