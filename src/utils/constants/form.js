
import { SEVERITY_OPTIONS, GENDER, INTERVIEW_LOCATION, STATUS, TRIP_DURATION, HOTEL_OR_ADDRESS, TRIP_PAYER, CLOSENESS, EXPENDED_CLOSENESS, GROUP_OR_ORGANIZATION } from './enums'

export const FORM_FIELDS = [
    { field: 'id', displayName: 'מזהה משימה', type: 'text' },
    { field: 'name', displayName: 'שם הטופס', type: 'text' },
    { field: 'owner', displayName: 'נוצר ע"י', type: 'text' },
    { field: 'location', displayName: 'מיקום', type: 'text' },
    { field: 'end_time', displayName: 'זמן סיום', type: 'date' },
    { field: 'start_time', displayName: 'זמן התחלה', type: 'date' },
    { field: 'create_time', displayName: 'זמן יצירת הטופס', type: 'date' },
    { field: 'priority', displayName: 'חשיבות', type: 'select', options: SEVERITY_OPTIONS },
].reverse();

export const FormFields = {
    '1': [
        //פרטים אישיים
        { field: 'interviewLocation', displayName: 'מיקום הראיון', type: 'select', options: INTERVIEW_LOCATION },
        { field: 'name', displayName: 'שם מלא', type: 'text' },
        { field: 'gender', displayName: 'מין', type: 'select', options: GENDER },
        { field: 'status', displayName: 'סטטוס', type: 'select', options: STATUS },
        { field: 'birthDate', displayName: 'תאריך לידה', type: 'date' },
        { field: 'birthTown', displayName: 'עיר לידה', type: 'searchBar' },
        { field: 'birthCity', displayName: 'ארץ לידה', type: 'searchBar' },
        { field: 'personId', displayName: 'תעודת זהות', type: 'text' },
        { field: 'phonselectber', displayName: 'מספר טלפון', type: 'text' },
        { field: 'mailAdress', displayName: 'כתובת מייל', type: 'text' },
        { field: 'primaryCitizenship', displayName: 'אזרחות ראשית', type: 'searchBar' },
        {
            field: 'foreignCitizenship', displayName: 'אזרחות זרה', type: 'Checkbox',
            onMarkCheckbox: [
                { field: 'foreignCitizenshipCountry', displayName: 'איזה מדינה', type: 'searchBar' },
                {
                    field: 'PassportOfForeignCitizenship', displayName: 'האם קיים דרכון של המדינה', type: 'Checkbox',
                    onMarkCheckbox: [{ field: 'ForeignPassportNumber', displayName: 'מספר דרכון', type: 'text' }]
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
        {
            field: 'tripDurationList', displayName: 'משך הטיול', type: 'ElementsCombine', display: 'grid',
            elementsList: [
                { field: 'tripDurationselect', displayName: 'הזנת מספר', type: 'select', options: TRIP_DURATION },
                {
                    field: 'tripDurationNumber', displayName: 'בחירה', type: 'text',
                    lessThan24HoursTrip: false
                }
            ]


        },
        {
            field: 'hotelOrAddressList', displayName: 'מלון או כתובת', type: 'select', options: HOTEL_OR_ADDRESS,
            lessThan24HoursTrip: false,
            onSelectOption: {
                'ADDRESS': [
                    { field: 'ApartmentStreet', displayName: 'רחוב', type: 'text' },
                    { field: 'ApartmentNumber', displayName: 'מספר דירה', type: 'text' },
                    { field: 'ApartmentCity', displayName: 'עיר', type: 'text' },
                    { field: 'ApartmentCountry', displayName: 'מדינה', type: 'searchBar' },
                    { field: 'ApartmentpostalCode', displayName: 'מיקוד', type: 'text' },
                ],
                'HOTEL': [
                    { field: 'hotel', displayName: 'מספר דירה', type: 'text' },
                    { field: 'HotelCity', displayName: 'עיר', type: 'text' },
                    { field: 'hotelCountry', displayName: 'מדינה', type: 'searchBar' }
                ]
            }
        },

        {
            field: `trip'sPayer`, displayName: 'משלם הטיול', type: 'select', options: TRIP_PAYER,
            onSelectOption: {
                'ANOTHER_PERSON': [
                    { field: `trip'sPayerLastName`, displayName: 'שם משפחה', type: 'text' },
                    { field: `trip'sPayerFirstName`, displayName: 'שם פרטי', type: 'text' },
                    { field: `trip'sPayerPhone`, displayName: 'מספר טלפון', type: 'text' },
                    { field: `trip'sPayerMailAddress`, displayName: 'כתובת מייל', type: 'text' },
                    { field: `trip'sPayerCloseness`, displayName: 'קרבה', type: 'select', options: CLOSENESS },
                    {
                        field: `trip'sPayerAddressSameToCustomer`, displayName: '?האם כתובת משלם הטיול איננה זהה לכתובת הלקוח ', type: 'Checkbox',
                        onMarkCheckbox: [
                            { field: `trip'sPayerStreet`, displayName: 'רחוב', type: 'text' },
                            { field: `trip'sPayerApartment`, displayName: 'מספר דירה', type: 'text' },
                            { field: `trip'sPayerApartmentCity`, displayName: 'עיר', type: 'text' },
                            {
                                field: `trip'sPayeroProvinces`, type: 'ElementsCombine', display: 'inline'
                                , elementsList: [
                                    {
                                        field: `trip'sPayeroProvincesCheckBox`, displayName: 'אינו חל', type: 'Checkbox',
                                        onMarkCheckbox: [{ disableElement: `trip'sPayeroProvincesText` }]
                                    },
                                    { field: `trip'sPayeroProvincesText`, displayName: 'עיר/פרובינס', type: 'text' },
                                ]
                            },
                            {
                                field: `trip'sPayeroPostalCode`, type: 'ElementsCombine', display: 'inline',
                                elementsList: [
                                    {
                                        field: `trip'sPayeroPostalCodeCheckBox`, displayName: 'אינו חל', type: 'Checkbox',
                                        onMarkCheckbox: [{ disableElement: `trip'sPayeroPostalCodeText` }]
                                    },
                                    { field: `trip'sPayeroPostalCodeText`, displayName: 'מיקוד', type: 'text' },
                                ]
                            },
                            { field: 'hotelCountry', displayName: 'מדינה', type: 'searchBar' }

                        ]
                    }
                ],
                'ANOTHER_COMPANY_OR_ORGANIZTION': [
                    { field: `trip'sPayerOrganiztionName`, displayName: 'שם הארגון', type: 'text' },
                    { field: `trip'sPayerOrganiztionPhone`, displayName: 'מספר טלפון', type: 'text' },
                    { field: `trip'sPayerOrganiztionCloseness`, displayName: 'קשר אליך', type: 'text' },
                    { field: `trip'sPayerOrganiztionStreet`, displayName: 'רחוב', type: 'text' },
                    { field: `trip'sPayerOrganiztionApartment`, displayName: 'מספר דירה', type: 'text' },
                    { field: `trip'sPayerOrganiztionCity`, displayName: 'עיר', type: 'text' },
                    {
                        field: `trip'sPayeroOrganiztionProvinces`, type: 'ElementsCombine', display: 'inline'
                        , elementsList: [
                            {
                                field: `trip'sPayeroOrganiztionProvincesCheckBox`, displayName: 'אינו חל', type: 'Checkbox',
                                onMarkCheckbox: [{ disableElement: `trip'sPayeroProvincesText` }]
                            },
                            { field: `trip'sPayeroOrganiztionProvincesText`, displayName: 'עיר/פרובינס', type: 'text' },
                        ]
                    },
                    {
                        field: `trip'sPayeroOrganiztionPostalCode`, type: 'ElementsCombine', display: 'inline',
                        elementsList: [
                            {
                                field: `trip'sPayeroOrganiztionPostalCodeCheckBox`, displayName: 'אינו חל', type: 'Checkbox',
                                onMarkCheckbox: [{ disableElement: `trip'sPayeroPostalCodeText` }]
                            },
                            { field: `trip'sPayeroOrganiztionPostalCodeText`, displayName: 'מיקוד', type: 'text' },
                        ]
                    },
                    { field: `trip'sPayeroOrganiztionCountry`, displayName: 'מדינה', type: 'searchBar' },


                ]

            }
        },
        {
            field: '', displayName: 'האם נוסעים איתך אנשים נוספים', type: 'Checkbox',
            onMarkCheckbox: [
                {
                    field: '', displayName: '?האם נוסע מטעם קבוצה או ארגון', type: 'select', options: GROUP_OR_ORGANIZATION,
                    onSelectOption: {
                        'YES': [
                            { field: '', displayName: 'שם הקבוצה/ארגון', type: 'text' }
                        ],
                        'NO': [
                            { field: '', displayName: 'שם פרטי', type: 'text' },
                            { field: '', displayName: 'שם משפחה', type: 'text' },
                            { field: `trip'sPayerCloseness`, displayName: 'קרבה', type: 'select', options: EXPENDED_CLOSENESS },
                        ]
                    }
                },



            ]
        },
    ],

    '3': [{ field: 'id', displayName: 'מזהה 3333333', type: 'text' },
    { field: 'name', displayName: 'שם 333333', type: 'text' },
    { field: 'owner', displayName: 'נוצר 3333333333"י', type: 'text' },
    { field: 'location', displayName: '33333333', type: 'text' },
    { field: 'end_time', displayName: 'זמן 333333333', type: 'date' },
    { field: 'start_time', displayName: 'זמן 333333333', type: 'date' },
    { field: 'create_time', displayName: 'זמ3333333333333ת 3', type: 'date' },
    { field: 'priority', displayName: '33333333333', type: 'select', options: SEVERITY_OPTIONS }],

    '4': [{ field: 'id', displayName: 'מזהה 444444444', type: 'text' },
    { field: 'name', displayName: 'שם 4444444', type: 'text' },
    { field: 'owner', displayName: '44444444 ע"י', type: 'text' },
    { field: 'location', displayName: '4444444', type: 'text' },
    { field: 'end_time', displayName: 'זמן 4444444444', type: 'date' },
    { field: 'start_time', displayName: 'זמן 4444444444', type: 'date' },
    { field: 'create_time', displayName: 'זמן יצירת 4444444444', type: 'date' },
    { field: 'priority', displayName: '44444444444', type: 'select', options: SEVERITY_OPTIONS }]

};
 