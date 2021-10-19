
import { SEVERITY_OPTIONS, GENDER, INTERVIEW_LOCATION, STATUS, TRIP_DURATION, HOTEL_OR_ADDRESS, TRIP_PAYER, CLOSENESS, EXPENDED_CLOSENESS, GROUP_OR_ORGANIZATION } from './enums'

// export const FORM_FIELDS = [
//     { fieldName: 'id', displayName: 'מזהה משימה', type: 'text' },
//     { fieldName: 'name', displayName: 'שם הטופס', type: 'text' },
//     { fieldName: 'owner', displayName: 'נוצר ע"י', type: 'text' },
//     { fieldName: 'location', displayName: 'מיקום', type: 'text' },
//     { fieldName: 'end_time', displayName: 'זמן סיום', type: 'date' },
//     { fieldName: 'start_time', displayName: 'זמן התחלה', type: 'date' },
//     { fieldName: 'create_time', displayName: 'זמן יצירת הטופס', type: 'date' },
//     { fieldName: 'priority', displayName: 'חשיבות', type: 'select', options: SEVERITY_OPTIONS },
// ].reverse();

export const FORM_FIELDS = {
    '1': [
        //פרטים אישיים
        { fieldName: 'interviewLocation', displayName: 'מיקום הראיון', type: 'select', options: INTERVIEW_LOCATION },
        { fieldName: 'name', displayName: 'שם מלא', type: 'text' },
        { fieldName: 'gender', displayName: 'מין', type: 'select', options: GENDER },
        { fieldName: 'status', displayName: 'סטטוס', type: 'select', options: STATUS },
        { fieldName: 'birthDate', displayName: 'תאריך לידה', type: 'date' },
        { fieldName: 'birthTown', displayName: 'עיר לידה', type: 'searchBar' },
        { fieldName: 'birthCity', displayName: 'ארץ לידה', type: 'searchBar' },
        { fieldName: 'personId', displayName: 'תעודת זהות', type: 'text' },
        { fieldName: 'phonselectber', displayName: 'מספר טלפון', type: 'text' },
        { fieldName: 'mailAdress', displayName: 'כתובת מייל', type: 'text' },
        { fieldName: 'primaryCitizenship', displayName: 'אזרחות ראשית', type: 'searchBar' },
        {
            fieldName: 'foreignCitizenship', displayName: 'אזרחות זרה', type: 'checkbox',
           // children:['foreignCitizenshipCountry', 'PassportOfForeignCitizenship'],
            onMarkCheckbox: [
                {
                    fieldName: 'foreignCitizenshipCountry', displayName: 'איזה מדינה', type: 'searchBar',parents:['foreignCitizenship']
                },
                {
                    fieldName: 'PassportOfForeignCitizenship', displayName: 'האם קיים דרכון של המדינה', type: 'checkbox',
                    parents:['foreignCitizenship'],
                    onMarkCheckbox: [{
                        fieldName: 'ForeignPassportNumber', displayName: 'מספר דרכון', type: 'text'
                        ,parents:['foreignCitizenship','PassportOfForeignCitizenship'],
                    }]
                }

            ]
        },
        //כתובת מגורים
        { fieldName: 'street', displayName: 'רחוב', type: 'text' },
        { fieldName: 'ApartmentNumber', displayName: 'מספר דירה', type: 'text' },
        { fieldName: 'city', displayName: 'עיר', type: 'text' },
        { fieldName: 'country', displayName: 'מדינה', type: 'searchBar' }


    ],

    '2': [
        { fieldName: 'flightDate', displayName: 'תאריך טיסה משוער', type: 'date' },
        {
            fieldName: 'tripDurationList', displayName: 'משך הטיול', type: 'ElementsCombine', display: 'grid',
            elementsList: [
                { fieldName: 'tripDurationselect', displayName: 'בחירה', type: 'select', options: TRIP_DURATION },
                {
                    fieldName: 'tripDurationNumber', displayName: 'הזנת מספר', type: 'text',
                    lessThan24HoursTrip: false
                }
            ]


        },
        {
            fieldName: 'hotelOrAddressList', displayName: 'מלון או כתובת', type: 'select', options: HOTEL_OR_ADDRESS,
            lessThan24HoursTrip: false,
            onSelectOption: {
                'ADDRESS': [
                    { fieldName: 'ApartmentStreet', displayName: 'רחוב', type: 'text',selectType:'hotelOrAddressList' },
                    { fieldName: 'ApartmentNumber', displayName: 'מספר דירה', type: 'text',selectType:'hotelOrAddressList' },
                    { fieldName: 'ApartmentCity', displayName: 'עיר', type: 'text',selectType:'hotelOrAddressList' },
                    { fieldName: 'ApartmentCountry', displayName: 'מדינה', type: 'searchBar',selectType:'hotelOrAddressList'},
                    { fieldName: 'ApartmentpostalCode', displayName: 'מיקוד', type: 'text',selectType:'hotelOrAddressList' },
                ],
                'HOTEL': [
                    { fieldName: 'hotelNumber', displayName: 'מספר דירה', type: 'text',selectType:'hotelOrAddressList' },
                    { fieldName: 'HotelCity', displayName: 'עיר', type: 'text',selectType:'hotelOrAddressList' },
                    { fieldName: 'hotelCountry', displayName: 'מדינה', type: 'searchBar',selectType:'hotelOrAddressList' }
                ]
            }
        },

        {
            fieldName: `trip'sPayer`, displayName: 'משלם הטיול', type: 'select', options: TRIP_PAYER,
            onSelectOption: {
                'ANOTHER_PERSON': [
                    { fieldName: `trip'sPayerLastName`, displayName: 'שם משפחה', type: 'text',selectType:`trip'sPayer`,selectOption: 'ANOTHER_PERSON'},
                    { fieldName: `trip'sPayerFirstName`, displayName: 'שם פרטי', type: 'text',selectType:`trip'sPayer`,selectOption: 'ANOTHER_PERSON' },
                    { fieldName: `trip'sPayerPhone`, displayName: 'מספר טלפון', type: 'text',selectType:`trip'sPayer`,selectOption: 'ANOTHER_PERSON' },
                    { fieldName: `trip'sPayerMailAddress`, displayName: 'כתובת מייל', type: 'text',selectType:`trip'sPayer`,selectOption: 'ANOTHER_PERSON' },
                    { fieldName: `trip'sPayerCloseness`, displayName: 'קרבה', type: 'select', options: CLOSENESS,selectType:`trip'sPayer`,selectOption: 'ANOTHER_PERSON' },
                    {
                        fieldName: `trip'sPayerAddressSameToCustomer`, displayName: '?האם כתובת משלם הטיול איננה זהה לכתובת הלקוח ', type: 'checkbox',
                        selectType:`trip'sPayer`,selectOption: 'ANOTHER_PERSON',
                        onMarkCheckbox: [
                            { fieldName: `trip'sPayerStreet`, displayName: 'רחוב', type: 'text' },
                            { fieldName: `trip'sPayerApartment`, displayName: 'מספר דירה', type: 'text' },
                            { fieldName: `trip'sPayerApartmentCity`, displayName: 'עיר', type: 'text' },
                            {
                                fieldName: `trip'sPayeroProvinces`, type: 'ElementsCombine', display: 'inline'
                                , elementsList: [
                                    {
                                        fieldName: `trip'sPayeroProvincesCheckBox`, displayName: 'אינו חל', type: 'checkbox',
                                        onMarkCheckbox: [{ disableElement: `trip'sPayeroProvincesText` }]
                                    },
                                    { fieldName: `trip'sPayeroProvincesText`, displayName: 'עיר/פרובינס', type: 'text' },
                                ]
                            },
                            {
                                fieldName: `trip'sPayeroPostalCode`, type: 'ElementsCombine', display: 'inline',
                                elementsList: [
                                    {
                                        fieldName: `trip'sPayeroPostalCodeCheckBox`, displayName: 'אינו חל', type: 'checkbox',
                                        onMarkCheckbox: [{ disableElement: `trip'sPayeroPostalCodeText` }]
                                    },
                                    { fieldName: `trip'sPayeroPostalCodeText`, displayName: 'מיקוד', type: 'text' },
                                ]
                            },
                            { fieldName: 'hotelCountry', displayName: 'מדינה', type: 'searchBar' }

                        ]
                    }
                ],
                'ANOTHER_COMPANY_OR_ORGANIZTION': [
                    { fieldName: `trip'sPayerOrganiztionName`, displayName: 'שם הארגון', type: 'text' },
                    { fieldName: `trip'sPayerOrganiztionPhone`, displayName: 'מספר טלפון', type: 'text' },
                    { fieldName: `trip'sPayerOrganiztionCloseness`, displayName: 'קשר אליך', type: 'text' },
                    { fieldName: `trip'sPayerOrganiztionStreet`, displayName: 'רחוב', type: 'text' },
                    { fieldName: `trip'sPayerOrganiztionApartment`, displayName: 'מספר דירה', type: 'text' },
                    { fieldName: `trip'sPayerOrganiztionCity`, displayName: 'עיר', type: 'text' },
                    {
                        fieldName: `trip'sPayeroOrganiztionProvinces`, type: 'ElementsCombine', display: 'inline'
                        , elementsList: [
                            {
                                fieldName: `trip'sPayeroOrganiztionProvincesCheckBox`, displayName: 'אינו חל', type: 'checkbox',
                                onMarkCheckbox: [{ disableElement: `trip'sPayeroOrganiztionProvincesText` }]
                            },
                            { fieldName: `trip'sPayeroOrganiztionProvincesText`, displayName: 'עיר/פרובינס', type: 'text' },
                        ]
                    },
                    {
                        fieldName: `trip'sPayeroOrganiztionPostalCode`, type: 'ElementsCombine', display: 'inline',
                        elementsList: [
                            {
                                fieldName: `trip'sPayeroOrganiztionPostalCodeCheckBox`, displayName: 'אינו חל', type: 'checkbox',
                                onMarkCheckbox: [{ disableElement: `trip'sPayeroOrganiztionPostalCodeText` }]
                            },
                            { fieldName: `trip'sPayeroOrganiztionPostalCodeText`, displayName: 'מיקוד', type: 'text' },
                        ]
                    },
                    { fieldName: `trip'sPayeroOrganiztionCountry`, displayName: 'מדינה', type: 'searchBar' },


                ]

            }
        },
        {
            fieldName: 'TravleWithMorePeople', displayName: 'האם נוסעים איתך אנשים נוספים', type: 'checkbox',
            onMarkCheckbox: [
                {
                    fieldName: 'groupOrOrganzizationTravel', displayName: '?האם נוסע מטעם קבוצה או ארגון', type: 'select', options: GROUP_OR_ORGANIZATION,
                    onSelectOption: {
                        'YES': [
                            { fieldName: 'groupOrOrganzizationTravelName', displayName: 'שם הקבוצה/ארגון', type: 'text',
                            selectType:'groupOrOrganzizationTravel' }
                        ],
                        'NO': [
                            { fieldName: 'TravleWithAnotherPeopleName', displayName: 'שם פרטי', type: 'text',
                            selectType:'groupOrOrganzizationTravel'  },
                            { fieldName: 'TravleWithAnotherPeopleFamily', displayName: 'שם משפחה', type: 'text',
                            selectType:'groupOrOrganzizationTravel'  },
                            { fieldName: `TravleWithAnotherPeopleClosnes`, displayName: 'קרבה', type: 'select', options: EXPENDED_CLOSENESS,
                            selectType:'groupOrOrganzizationTravel'  },
                        ]
                    }
                },



            ]
        },
    ],

    '3': [
        {
            fieldName: 'PreviousVisitsToUS', displayName: 'האם ביקרת בארה"ב?', type: 'checkbox',
            onMarkCheckbox: [
                { fieldName: 'PreviousVisitsToUSDDate', displayName: 'תאריך הביקור', type: 'date' },
                { fieldName: 'PreviousVisitsToUSDurationselect', displayName: 'הזנת מספר', type: 'select', options: TRIP_DURATION },
                {
                    fieldName: 'PreviousVisitsToUSDurationNumber', displayName: 'בחירה', type: 'text',
                }

            ]
        },
        {
            fieldName: 'IssuedUSVisa', displayName: 'האם הונפקה לך בעבר ויזה לארה"ב', type: 'checkbox',
            onMarkCheckbox: [
                { fieldName: 'IssuanceVisaDate', displayName: 'תאריך הנפקת ויזה', type: 'date' },
                {
                    fieldName: `trip'sPayeroOrganiztionPostalCode`, type: 'ElementsCombine', display: 'inline',
                    elementsList: [
                        {
                            fieldName: `USVisaNumberCheckBox`, displayName: 'לא ידוע', type: 'checkbox',
                            onMarkCheckbox: [{ disableElement: `USVisaNumber` }]
                        },
                        { fieldName: `USVisaNumber`, displayName: 'מספר ויזה לארה"ב', type: 'text' },
                    ]
                },
                { fieldName: `ApplyingSameVisaTypeCheckbox`, displayName: 'האם מגיש בקשה לאותו סוג ויזה', type: 'checkbox' },
                { fieldName: `ApplyVisaAtSameLocationCheckbox`, displayName: 'האם מגיש בקשה באותו מיקום ', type: 'checkbox' },
                { fieldName: `Gave10FingerClaimCheckbox`, displayName: 'האם נתן 10 תביעות אצבע', type: 'checkbox' },
                {
                    fieldName: 'VisaHasBeenLostCheckbox', displayName: 'האם הויזה שלך אבדה/נגנבה', type: 'checkbox',
                    onMarkCheckbox: [
                        { fieldName: 'VisaHasBeenLostDate', displayName: 'שנה', type: 'Number' },
                        { fieldName: 'VisaHasBeenLostText', displayName: 'הסבר', type: 'Textarea' }]
                },
                {
                    fieldName: 'VisaHasBeenCanceledCheckbox', displayName: 'האם הויזה שלך בוטלה/נשללה', type: 'checkbox',
                    onMarkCheckbox: [{ fieldName: 'VisaHasBeenCanceledText', displayName: 'הסבר', type: 'Textarea' }]
                },
                {
                    fieldName: 'VisaAplicationDeniedCheckbox', displayName: 'האם סורבה בקשתך לויזה לארה"ב', type: 'checkbox',
                    onMarkCheckbox: [
                        {
                            fieldName: 'VisaAplicationDeniedText', displayName: 'הסבר', type: 'Textarea',
                            placeHolder: `My b1/b2 visa application was previously refused by the consular section 
                                    of the U.S Embassy in Israel under section 214/b`}]
                },
                {
                    fieldName: 'AppliedForGreenCardCheckbox', displayName: 'האם הגישו עבורך בקשה לגרין קארד', type: 'checkbox',
                    onMarkCheckbox: [{ fieldName: 'AppliedForGreenCardText', displayName: 'הסבר', type: 'Textarea' }]
                },
                {
                    fieldName: 'ESTARequestDeniedCheckbox', displayName: 'ESTAהאם סורבה בקשתך ל', type: 'checkbox',
                    onMarkCheckbox: [{ fieldName: 'ESTARequestDeniedCheckBoxText', displayName: 'הסבר', type: 'Textarea' }]
                },
                {
                    fieldName: `trip'sPayeroProvinces`, type: 'ElementsCombine', display: 'inline'
                    , elementsList: [
                        {
                            fieldName: 'HoldAnSSNCheckbox', displayName: ' האם אתה מחזיק SSN', type: 'checkbox',
                            onMarkCheckbox: []
                        },
                        { fieldName: `HoldAnSSNText1`, displayName: '', maxlength: "4", type: 'text' },
                        { fieldName: `HoldAnSSNText2`, displayName: '', maxlength: "2", type: 'text' },
                        { fieldName: `HoldAnSSNText3`, displayName: '', maxlength: "3", type: 'text' },
                    ]
                },


                {
                    fieldName: `HeldAmericanTaxpayerNumberCombine`, type: 'ElementsCombine', display: 'inline'
                    , elementsList: [
                        {
                            fieldName: 'HeldAmericanTaxpayerNumberCheckbox', displayName: 'האם חזקת מספר משלם מס אמריקאי', type: 'checkbox',
                            onMarkCheckbox: [{ disableElement: 'HeldAmericanTaxpayerNumberText' }]
                        },
                        { fieldName: `HeldAmericanTaxpayerNumberText`, displayName: 'הסבר', type: 'text' },
                    ]
                },
                {
                    fieldName: 'lostOrStolenPassportCheckbox', displayName: 'האם אי פעם אבד או נגנב לך דרכון', type: 'checkbox',
                    onMarkCheckbox: [
                        { fieldName: 'LostPassportNumberText', displayName: 'מספר דרכון', type: 'text' },
                        { fieldName: 'CountryIssuedPassportSearch', displayName: 'מדינה שהנפיקה את הדרכון', type: 'searchBar' },
                        { fieldName: 'LostPassportExplanationText', displayName: 'הסבר', type: 'Textarea' }

                    ]
                },

            ]
        },
    ],

    '4': [{ fieldName: 'id', displayName: 'מזהה 444444444', type: 'text' },
    { fieldName: 'name', displayName: 'שם 4444444', type: 'text' },
    { fieldName: 'owner', displayName: '44444444 ע"י', type: 'text' },
    { fieldName: 'location', displayName: '4444444', type: 'text' },
    { fieldName: 'end_time', displayName: 'זמן 4444444444', type: 'date' },
    { fieldName: 'start_time', displayName: 'זמן 4444444444', type: 'date' },
    { fieldName: 'create_time', displayName: 'זמן יצירת 4444444444', type: 'date' },
    { fieldName: 'priority', displayName: '44444444444', type: 'select', options: SEVERITY_OPTIONS }]

};
