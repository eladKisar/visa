import {  
    TextField,
} from '@material-ui/core';
import DropDown from '../DropDown/DropDown.jsx'
import React, { useState, useEffect } from "react";
import DateUtils from "@date-io/moment";
import SearchBar from '../SearchBar/SearchBar.jsx'
import CheckBox from '../CheckBox/CheckBox.jsx'
import { DateTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
const RenderField = (field) => {
   var { field} = field;
  //  console.log('field.onTrueField  ',field.onTrueField)
   // console.log('field  ',field)

   // const [checkedState, setCheckedState] = useState(false);

    // if (HotelOrAddress.indexOf('HOTEL') === -1) {
    //     setHotelOrAddress([...HotelOrAddress, 'HOTEL']);
    // }
    // if(HotelOrAddress.indexOf('enum') === -1) {
    //     setHotelOrAddress('enum');
    // }
    //if(lessThan24HoursTrip !==lessThan24HoursTripState){
    switch (field.type) {
        case 'select':
            return (
                <DropDown field={field}>
                 
                </DropDown>
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
                    <CheckBox field={field.onMarkCheckbox}></CheckBox>
                    {/* <Checkbox id='checkBox'
                        onClick={
                            () => {
                                var checkBox = document.getElementById("checkBox");
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
                                            <RenderField field={field}></RenderField>
                                            </TableCell>
                                            <TableCell width="50%" align="right">{field.displayName}</TableCell>
                                        </TableRow>
                                )
                        }
                        </dev>
                        : <div />} */}
                </div>
            );
        case 'list':
            var x = Object.keys(field.listOptions)
            //    .filter((key) => key === HotelOrAddress)
            //     .map((key, index) =>{
            //         listOptions[key].map((item =>{
            //             console.log('qqqqqqqqqqqqqq',item)
            //         }))
            //     })
            // return (
            //     <div>
                    // {
                    //     HotelOrAddress.map(item => {
                    //         <TableRow style={{ width: '100%' }}>
                    //             <TableCell width="50%" align="right">
                    //                 {
                    //                     listOptions[item]
                    //                         .filter(({ field }) => field !== 'id')
                    //                         .map(
                    //                             (field, index) => { renderField(field) }

                    //                         )
                    //                 }

                    //             </TableCell>
                    //             <TableCell width="50%" align="right">{field.displayName}</TableCell>
                    //         </TableRow>

                    //     })
                    // }
            //     </div>
            // );

        default:
            return <TextField
                dir="rtl"
                value={''}
                onChange={() => { }}
            />
    }

}

export default RenderField;