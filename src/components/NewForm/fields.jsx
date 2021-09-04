import {
    TableRow,
    TableCell,
    TextField,
    MenuItem,
    Radio,
    Checkbox,
} from '@material-ui/core';
import React, { useState, useEffect } from "react";
import DateUtils from "@date-io/moment";
import SearchBar from '../SearchBar/SearchBar.jsx'

import { DateTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';

const Fields = ({ fields }) => {
    const [checkedState, setCheckedState] = useState(false);
    const [lessThan24HoursTripState, setLessThan24HoursTrip] = useState(false);
    const [HotelOrAddress, setHotelOrAddress] = useState(['HOTEL', 'enum']);

    //   useEffect(() => {
    //     // Should not ever set state during rendering, so do this in useEffect instead.
    //     setHotelOrAddress('HOTEL');
    //   }, []);

    // const [checkedState, setCheckedState]= useState(
    //     new Array(5).fill(false) 
    //   );

    //   const handleOnChange = (position) => {
    //     const updatedCheckedState = setLessHotelOrAddress.map((item, index) =>
    //       index === position ? !item : item
    //     );

    //     setLessHotelOrAddress(updatedCheckedState);
    // }
    const handleChange = (event, field) => {
        const { value } = event.target;

        switch (value) {
            case 'LASS_THAN_24_HOURS':
                setLessThan24HoursTrip(false)
            case 'HOTEL':
                if (HotelOrAddress.indexOf(value) === -1) {
                    setHotelOrAddress([...HotelOrAddress, value]);
                }

            case 'ADDRESS':
                if (HotelOrAddress.indexOf(value) === -1) {
                    setHotelOrAddress([...HotelOrAddress, value]);
                }


            default:

        }
    }

    const renderField = ({ field, type, options, displayName, onTrueField, listOptions, lessThan24HoursTrip, listTest }, form) => {
        console.log('HotelOrAddress', HotelOrAddress)
        console.log('field', field)
        console.log('type', type)

        if (HotelOrAddress.indexOf('HOTEL') === -1) {
            setHotelOrAddress([...HotelOrAddress, 'HOTEL']);
        }
        // if(HotelOrAddress.indexOf('enum') === -1) {
        //     setHotelOrAddress('enum');
        // }
        //if(lessThan24HoursTrip !==lessThan24HoursTripState){
        switch (type) {
            case 'enum':
                return (
                    <TextField
                        select={true}
                        value={''}
                        placeholder={displayName}
                        onChange={event => handleChange(event, field)}
                        dir="ltr"
                    >
                        {
                            options.map(
                                option =>
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                            )
                        }
                    </TextField>
                );
            case 'date':
                return (
                    <MuiPickersUtilsProvider utils={DateUtils}>
                        <DateTimePicker
                            autoOk
                            ampm={false}
                            disableFuture
                            value={null}
                            onChange={() => { }}
                            dir="rtl"
                            placeholder="January 1st 00:00"
                        />
                    </MuiPickersUtilsProvider>
                );
            case 'searchBar':
                return (
                    <SearchBar>

                    </SearchBar>
                );
            case 'Checkbox':
                return (
                    <div>
                        <Checkbox id='chackBox'
                            onClick={
                                () => {
                                    var checkBox = document.getElementById("chackBox");
                                    setCheckedState(checkBox.checked)
                                }}>
                        </Checkbox>
                        {checkedState ?
                            <dev> {
                                onTrueField
                                    .filter(({ field }) => field !== 'id')
                                    .map(
                                        (field, index) =>
                                            <TableRow style={{ width: '100%' }} key={index}>
                                                <TableCell width="50%" align="right">
                                                    {renderField(field)}
                                                </TableCell>
                                                <TableCell width="50%" align="right">{field.displayName}</TableCell>
                                            </TableRow>
                                    )
                            }
                            </dev>
                            : <div />}
                    </div>

                );
            case 'list':
          //      var x = Object.keys(listOptions)
                //    .filter((key) => key === HotelOrAddress)
                //     .map((key, index) =>{
                //         listOptions[key].map((item =>{
                //             console.log('qqqqqqqqqqqqqq',item)
                //         }))
                //     })
               // return (
                var x
                        {
                            HotelOrAddress.map(item => {
                              x =   listOptions[item]
                                    .filter(({ field }) => field !== 'id')
                                    .map(
                                        (field, index) =>
                                            <TableRow style={{ width: '100%' }} key={index}>
                                                <TableCell width="50%" align="right">
                                                    {renderField(field)}
                                                </TableCell>
                                                <TableCell width="50%" align="right">{field.displayName}</TableCell>
                                            </TableRow>
                                    )
                            })
                        }
                    return x;
                //);

            default:
                return <TextField
                    dir="rtl"
                    value={''}
                    onChange={() => { }}
                />
        }

    }
    fields.map(key => console.log('fieldssssss', key)
    )
    return (
        <dev>
            {
                fields
                    .filter(({ field }) => field !== 'id')
                    .map(
                        (field, index) =>
                            <TableRow style={{ width: '100%' }} key={index}>
                                <TableCell width="50%" align="right">
                                    {renderField(field)}
                                </TableCell>
                                <TableCell width="50%" align="right">{field.displayName}</TableCell>
                            </TableRow>
                    )
            }
        </dev>



    );
};

////HotelOrAddress.indexOf(key) > -1)


// <div> {
//     Object.keys(listOptions) 
//       // .filter((key) => key === 'enum' || key === HotelOrAddress) 
//         .map((key) =>{                                   
//                 listOptions[key].map((item,index)  =>{
//                  <TableRow style={{ width: '100%' }} key={index}>
//                  <TableCell width="50%" align="right">
//                     {renderField(item)}
//                  </TableCell>
//                  <TableCell width="50%" align="right">{field.displayName}</TableCell>
//              </TableRow>
//             })

//         }

//         )
// }
// </div>
export default Fields;
