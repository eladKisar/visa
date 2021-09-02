
import { SEVERITY_OPTIONS, GENDER, INTERVIEW_LOCATION, STATUS, FORM_MODES } from './enums'

export const FORM_FIELDS = [
    { field: 'id', displayName: 'מזהה משימה', type: 'text' },
    { field: 'name', displayName: 'שם הטופס', type: 'text' },
    { field: 'owner', displayName: 'נוצר ע"י', type: 'text' },
    { field: 'location', displayName: 'מיקום', type: 'text' },
    { field: 'end_time', displayName: 'זמן סיום', type: 'date' },
    { field: 'start_time', displayName: 'זמן התחלה', type: 'date' },
    { field: 'create_time', displayName: 'זמן יצירת הטופס', type: 'date' },
    { field: 'priority', displayName: 'חשיבות', type: 'enum', options: SEVERITY_OPTIONS },
].reverse();

export const FormFields = {
    '1': [
        { field: 'interviewLocation', displayName: 'מיקום הראיון', type: 'enum', options: INTERVIEW_LOCATION },
        { field: 'name', displayName: 'שם מלא', type: 'text' },
        { field: 'gender', displayName: 'מין', type: 'enum', options: GENDER },
        { field: 'status', displayName: 'סטטוס', type: 'enum', options: STATUS },
        { field: 'birthDate', displayName: 'תאריך לידה', type: 'date' },    
        { field: 'birthTown', displayName: 'עיר לידה', type: 'searchBar' },
        { field: 'personId', displayName: 'תעודת זהות', type: 'text' },
        { field: 'phoneNumber', displayName: 'מספר טלפון', type: 'text' },
        { field: 'mailAdress', displayName: 'כתובת מייל', type: 'text'}
    ],

    '2': [{ field: 'id', displayName: '222222ה', type: 'text' },
    { field: 'name', displayName: 'שם 222222', type: 'text' },
    { field: 'owner', displayName: '2222222 ע"י', type: 'text' },
    { field: 'location', displayName: '222222', type: 'text' },
    { field: 'end_time', displayName: 'זמן 222222', type: 'date' },
    { field: 'start_time', displayName: 'זמן 22222222', type: 'date' },
    { field: 'create_time', displayName: 'זמן יצירת 2222222', type: 'date' },
    { field: 'priority', displayName: '222222222', type: 'enum', options: SEVERITY_OPTIONS }],

    '3': [{ field: 'id', displayName: 'מזהה 3333333', type: 'text' },
    { field: 'name', displayName: 'שם 333333', type: 'text' },
    { field: 'owner', displayName: 'נוצר 3333333333"י', type: 'text' },
    { field: 'location', displayName: '33333333', type: 'text' },
    { field: 'end_time', displayName: 'זמן 333333333', type: 'date' },
    { field: 'start_time', displayName: 'זמן 333333333', type: 'date' },
    { field: 'create_time', displayName: 'זמ3333333333333ת 3', type: 'date' },
    { field: 'priority', displayName: '33333333333', type: 'enum', options: SEVERITY_OPTIONS }],

    '4': [{ field: 'id', displayName: 'מזהה 444444444', type: 'text' },
    { field: 'name', displayName: 'שם 4444444', type: 'text' },
    { field: 'owner', displayName: '44444444 ע"י', type: 'text' },
    { field: 'location', displayName: '4444444', type: 'text' },
    { field: 'end_time', displayName: 'זמן 4444444444', type: 'date' },
    { field: 'start_time', displayName: 'זמן 4444444444', type: 'date' },
    { field: 'create_time', displayName: 'זמן יצירת 4444444444', type: 'date' },
    { field: 'priority', displayName: '44444444444', type: 'enum', options: SEVERITY_OPTIONS }]

};
