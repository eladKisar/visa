import { useEffect } from 'react';
import { connect } from 'react-redux';
import {
    TableContainer,
    Table,
    TableBody,
    TableHead,
    TableCell,
    Paper,
} from '@material-ui/core';
import { Delete, Edit } from '@material-ui/icons';

import { removeForm, newForm, getAllForms } from 'store/forms/forms.actions';
import { FORM_FIELDS } from 'utils/constants/form';
import { getStep } from 'utils/form';
import FormRow from '../FormRow/FormRow';
import FormHeaderRow from '../FormHeaderRow/FormHeaderRow';

import './FormList.scss';

const mapStateToProps = (state) => ({
    forms: state.forms.forms,
});

const mapDispatchToProps = (dispatch) => ({
    newForm: (...args) => newForm(...args)(dispatch),
    removeForm: (...args) => removeForm(...args)(dispatch),
    getAllForms: (...args) => getAllForms(...args)(dispatch),
});

const FormList = ({
    forms,
    selectedStep,
    removeForm,
    editFormClick,
    getAllForms,
}) => {
    useEffect(() => {
        getAllForms();

        const refreshIntervalID = setInterval(getAllForms, 3000);
        return () => clearInterval(refreshIntervalID);
    }, []);

    return (
        <TableContainer component={Paper}>
            <Table className="form-list">
                <TableHead>
                    <FormHeaderRow header fields={FORM_FIELDS.map(({ displayName }) => displayName)}>
                        <TableCell align="right" colSpan={1} width={`${100 / (FORM_FIELDS.length + 1)}%`} className='field'>פעולות</TableCell>
                    </FormHeaderRow>
                </TableHead>
                <TableBody>
                    {
                        forms
                            .filter(form => getStep(form) === selectedStep)
                            .map((form, index) => {
                                return (
                                    <FormRow key={index} form={form} fields={FORM_FIELDS.map(({ field }) => form.content[field] || form[field])}>
                                        <Delete className='action-item' onClick={() => removeForm(form.id)} />
                                        <Edit className='action-item' onClick={() => editFormClick(form)} />
                                    </FormRow>
                                )
                            })
                    }
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(FormList);
