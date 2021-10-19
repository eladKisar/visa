import {
    TableRow,
    TableCell,
} from '@material-ui/core';
import React, { useState, useEffect } from "react";
import RenderField from '../RenderField/RenderField.jsx'
import Select from 'react-select'
const DropDown = ({ field, handleChangeForm }) => {
    const [selectState, setSelectState] = useState();

    const handleChange = (valueObj, field) => {
        const value = valueObj.value;
        var FieldsVales ={};
        if(field.onSelectOption !== undefined){
            field.onSelectOption[value]?.forEach(element => {
                FieldsVales[element.fieldName] = ''
              });
              handleChangeForm({selectOption:value,FieldsVales}, field)
        }else{
              handleChangeForm(value, field);  
        }
       
        setSelectState(value);
    }
    return (
        <div>
            <Select options={field.options} onChange={value => handleChange(value, field)}>
            </Select>
            {field.onSelectOption && selectState && field.onSelectOption[selectState] ?
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