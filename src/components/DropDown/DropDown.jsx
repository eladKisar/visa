import {
    TableRow,
    TableCell,
    Checkbox,
} from '@material-ui/core';
import React, { useState, useEffect } from "react";
import RenderField from '../RenderField/RenderField.jsx'
import Select from 'react-select'
const DropDown = ({field}) => {
    const [selectState, setSelectState] = useState();

    const handleChange = (value) => {
              setSelectState(value.value);
    }
    return (
        <div>
            <Select options={field.options}   onChange={value => handleChange(value)}
>
            </Select>
            { field.onSelectOption && selectState?
                <dev> {
                    field.onSelectOption[selectState]
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
                : <div />}
        </div>
    );
}
export default DropDown