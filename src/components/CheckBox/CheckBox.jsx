import {
    TableRow,
    TableCell,
    Checkbox,
} from '@material-ui/core';
import { useState } from "react";
import RenderField from '../RenderField/RenderField.jsx';


const CheckBox = ({ onMarkChecboxFields, field,handleChange }) => {
    const [checkedState, setCheckedState] = useState(false);

    return (
        <div>
            <Checkbox id='checkbox'
                onClick={
                    () => {
                        setCheckedState(!checkedState);
                        if (onMarkChecboxFields) {
                            onMarkChecboxFields
                                .filter((field) => field.disableElement !== undefined)
                                .map( (field) => {
                                    console.log('field.disableElement',field.disableElement);
                                    document.getElementById(`${field.disableElement}`).disabled = !checkedState
                                })
                        }
                      handleChange(!checkedState, field);

                    }}>
            </Checkbox>
            {checkedState && onMarkChecboxFields ?
                <dev> {
                    onMarkChecboxFields
                        .filter((field) => field?.disableElement === undefined)
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