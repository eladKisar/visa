
import { SEVERITY_OPTIONS, GENDER, INTERVIEW_LOCATION, STATUS, TRIP_DURATION, HOTEL_OR_ADDRESS } from './enums'

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
        //פרטים אישיים
        { field: 'interviewLocation', displayName: 'מיקום הראיון', type: 'enum', options: INTERVIEW_LOCATION },
        { field: 'name', displayName: 'שם מלא', type: 'text' },
        { field: 'gender', displayName: 'מין', type: 'enum', options: GENDER },
        { field: 'status', displayName: 'סטטוס', type: 'enum', options: STATUS },
        { field: 'birthDate', displayName: 'תאריך לידה', type: 'date' },
        { field: 'birthTown', displayName: 'עיר לידה', type: 'searchBar' },
        { field: 'birthCity', displayName: 'ארץ לידה', type: 'searchBar' },
        { field: 'personId', displayName: 'תעודת זהות', type: 'text' },
        { field: 'phoneNumber', displayName: 'מספר טלפון', type: 'text' },
        { field: 'mailAdress', displayName: 'כתובת מייל', type: 'text' },
        { field: 'primaryCitizenship', displayName: 'אזרחות ראשית', type: 'searchBar' },
        {
            field: 'foreignCitizenship', displayName: 'אזרחות זרה', type: 'Checkbox',
            onTrueField: [
                { field: 'foreignCitizenshipCountry', displayName: 'איזה מדינה', type: 'searchBar' },
                {
                    field: 'PassportOfForeignCitizenship', displayName: 'האם קיים דרכון של המדינה', type: 'Checkbox',
                    onTrueField: [{ field: 'ForeignPassportNumber', displayName: 'מספר דרכון', type: 'text' }]
                }

            ]
        },
        //כתובת מגורים
        { field: 'street', displayName: 'רחוב', type: 'text' },
        { field: 'ApartmentNumber', displayName: 'מספר דירה', type: 'text' },
        { field: 'city', displayName: 'עיר', type: 'text' },
        { field: 'country', displayName: 'מדינה', type: 'searchBar' }


    ],

    '2': [
        { field: 'flightDate', displayName: 'תאריך טיסה משוער', type: 'date' },
        // {
        //     field: 'tripDurationList', displayName: 'משך הטיול', type: 'list', listOptions: {
        //         'enum':{ field: 'tripDurationEnum', displayName: 'הזנת מספר', type: 'enum', options: TRIP_DURATION },
        //         'tripDunbrationNumber':{ field: 'tripDurationNumber', displayName: 'בחירה', type: 'text', lessThan24HoursTrip: false }
        //     }
        // },
        {
            field: 'hotelOrAddressList', displayName: 'מלון או כתובת', type: 'list',
            lessThan24HoursTrip: false,
            listOptions: {
                'enum': [{ field: 'hotelOrAddress', displayName: '', type: 'enum', options: HOTEL_OR_ADDRESS }],
                'ADDRESS': [
                    // field: 'ApartmentList', displayName: 'כתובת', type: 'list', listOptions: [
                    { field: 'ApartmentStreet', displayName: 'רחוב', type: 'text' },
                    { field: 'ApartmentNumber', displayName: 'מספר דירה', type: 'text' },
                    { field: 'ApartmentCity', displayName: 'עיר', type: 'text' },
                    { field: 'ApartmentCountry', displayName: 'מדינה', type: 'searchBar' },
                    { field: 'ApartmentpostalCode', displayName: 'מיקוד', type: 'text' },

                    //  ]
                ],
                'HOTEL': [
                    //  field: 'hotelList', displayName: 'מלון', type: 'list', listOptions:
                    { field: 'hotel', displayName: 'מספר דירה', type: 'text' },
                    { field: 'HotelCity', displayName: 'עיר', type: 'text' },
                    { field: 'hotelCountry', displayName: 'מדינה', type: 'searchBar' }
                ]
            }
        }

        ,
    ],

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
