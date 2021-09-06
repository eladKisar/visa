import {
    TableRow,
    TableCell,
    Checkbox,
} from '@material-ui/core';
import React, { useState, useEffect } from "react";
import RenderField from '../RenderField/RenderField.jsx'
const CheckBox = ( {field}) => {
    const [checkedState, setCheckedState] = useState(false);
    return (
        <div>
            <Checkbox id='CheckBox'
                onClick={
                    () => {
                        var checkBox = document.getElementById("CheckBox");
                        setCheckedState(checkBox.checked)
                    }}>
            </Checkbox>
            {checkedState && field ?
                <dev> {
                    field
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
export default CheckBox