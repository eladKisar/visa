import {
    TableRow,
    TableCell,
    TextField,
    MenuItem,
    Radio,
    Checkbox,
} from '@material-ui/core';
import React, { useState } from "react";
import DateUtils from "@date-io/moment";
import SearchBar from '../SearchBar/SearchBar.jsx'

import { DateTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { CompassCalibrationOutlined, ContactsOutlined } from '@material-ui/icons';

const Fields = ({ fields }) => {
    const [checkedState, setCheckedState] = useState(false);
    // const [checkedState, setCheckedState] = useState(
    //     new Array(5).fill(false)
    //   );

    //   const handleOnChange = (position) => {
    //     const updatedCheckedState = checkedState.map((item, index) =>
    //       index === position ? !item : item
    //     );
    
    //     setCheckedState(updatedCheckedState);
    // }
    
    const renderField = ({ field, type, options, onTrueField }, form) => {
       var index= 0;

        switch (type) {
            case 'enum':
                return (
                    <TextField
                        select={true}
                        value={''}
                        onChange={() => { }}
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

            default:
                return <TextField
                    dir="rtl"
                    value={''}
                    onChange={() => { }}
                />
        }
    }
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

export default Fields;
