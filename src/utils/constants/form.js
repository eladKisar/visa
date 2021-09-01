export const SEVERITY_OPTIONS = [
    {
        value: 'high',
        label: 'גבוהה',
    },
    {
        value: 'medium',
        label: 'בינונית',
    },
    {
        value: 'low',
        label: 'נמוכה',
    },
];

export const FORM_MODES = {
    NEW: 'NEW',
    EDIT: 'EDIT',
}

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
