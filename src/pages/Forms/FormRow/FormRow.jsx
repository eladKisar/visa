import { useRef } from 'react';
import {
    TableCell,
    TableRow,
} from '@material-ui/core';
import { Description } from '@material-ui/icons';
import { CSVLink } from 'react-csv';
import { parse } from 'json2csv';

import { FORM_FIELDS } from 'utils/constants/form';
import { translateField } from 'utils/translate/field';

import './FormRow.scss';

const stringify = (value) => {
    switch (typeof value) {
        case 'string':
            return value;
        case 'boolean':
        case 'bigint':
        case 'number':
            return `${value}`;
        case 'object':
            return JSON.stringify(value);
        default:
            return null;
    }
}

const FormRow = ({
    fields,
    className,
    children,
    form,
}) => {
    const csvRef = useRef();
    return (
        <TableRow className={`form-row${className ? ` ${className}` : ''}`}>
            {fields.map((field, index) =>
                <TableCell
                    align="right"
                    colSpan={1}
                    width={`${100 / (FORM_FIELDS.length + 1)}%`}
                    className='field'
                    key={index}>
                    {translateField(stringify(field))}
                </TableCell>
            )}
            <TableCell align="right" colSpan={1} width={`${100 / (FORM_FIELDS.length + 1)}%`} className='field actions'>
                {children}
                {
                    <>
                        <Description className='action-item' onClick={() => {
                            csvRef.current.link.click();
                        }} />
                        <CSVLink
                            data={parse(form.content, {
                                fields: FORM_FIELDS.filter(
                                    formField => formField.field !== 'id'
                                ).map(({ field }) => field)
                            })}
                            filename={`${form.id}.csv`}
                            className='hidden'
                            ref={csvRef}
                            target='_blank'
                        />
                    </>
                }
            </TableCell>
        </TableRow>
    );
}

export default FormRow;
