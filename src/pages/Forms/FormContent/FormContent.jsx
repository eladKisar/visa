import { useEffect } from 'react';
import { connect } from 'react-redux';
import {
    TableContainer,
    Table,
    TableBody,
    TableRow,
    TableCell,
    Paper,
    TextField,
    Button,
    MenuItem,
} from '@material-ui/core';
import DateUtils from "@date-io/moment";
import { DateTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { useParams } from 'react-router-dom';

import { FORM_MODES } from 'utils/constants/enums';
import { FORM_FIELDS} from 'utils/constants/form';
import { useFormState } from 'utils/hooks/useFormState';
import { createForm, editForm, getAllForms, setForm } from 'store/forms/forms.actions';

import './FormContent.scss';

const mapStateToProps = (state) => ({
    currentForm: state.forms.currentForm,
    user: state.authentication.user,
    forms: state.forms.forms,
    mode: state.forms.mode,
})

const mapDispatchToProps = (dispatch) => ({
    createForm: (...args) => createForm(...args)(dispatch),
    editForm: (...args) => editForm(...args)(dispatch),
    getAllForms: (...args) => getAllForms(...args)(dispatch),
    setForm: (...args) => setForm(...args)(dispatch),
});

const FormContent = ({
    history,
    user,

    currentForm,
    forms,
    mode,

    getAllForms,
    createForm,
    editForm,
    setForm,
}) => {
    useEffect(() => {
        if (user === null) {
            history.push('/login');
        }
    }, [user, history]);

    const { id } = useParams();
    useEffect(() => {
        if (!!id && forms.length > 0) {
            const form = forms.find(({ id: formId }) => formId === id);
            setForm(form)
        }
    }, [id, forms]);

    useEffect(() => {
        getAllForms();
    }, [getAllForms]);

    const { formData, setFormValue, setFormData } = useFormState(
        FORM_FIELDS
            .filter(({ field }) => field !== 'id')
            .reduce(
                (formMapping, currentField) => ({
                    ...formMapping,
                    [currentField.field]: {
                        validate: v => !!v,
                        default: ''
                    }
                }),
                {}
            )
    );

    useEffect(() => {
        setFormData(currentForm);
    }, [currentForm]);

    const handleChange = (event, field) => {
        const { value } = event.target;
        setFormValue(field, value);
    }

    const handleDateChange = (date, field) => {
        setFormValue(field, date);
    }

    const submitForm = () => {
        if (mode === FORM_MODES.NEW) createForm(formData);
        else editForm(id, formData);
    }

    const renderField = ({ field, type, options }, form) => {
        switch (type) {
            case 'enum':
                return (
                    <TextField
                        select={true}
                        value={form[field] || ''}
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
                            value={form[field] || null}
                            onChange={date => handleDateChange(date, field)}
                            dir="rtl"
                            placeholder="January 1st 00:00"
                        />
                    </MuiPickersUtilsProvider>
                );
            default:
                return <TextField
                    dir="rtl"
                    value={form[field] || ''}
                    onChange={event => handleChange(event, field)}
                />
        }
    }

    return (
        <section className="form-content">
            <TableContainer component={Paper} className='form-table-container'>
                <Table style={{ width: '100%' }}>
                    <TableBody style={{ width: '100%' }}>
                        {
                            FORM_FIELDS
                                .filter(({ field }) => field !== 'id')
                                .map(
                                    (field, index) =>
                                        <TableRow style={{ width: '100%' }} key={index}>
                                            <TableCell width="50%" align="right">
                                                {renderField(field, formData)}
                                            </TableCell>
                                            <TableCell width="50%" align="right">{field.displayName}</TableCell>
                                        </TableRow>
                                )
                        }
                    </TableBody>
                </Table>
            </TableContainer>
            <Button
                className='btn-submit'
                color="primary"
                variant="contained"
                style={{ fontSize: "18px", margin: '15px 0' }}
                onClick={submitForm}
            >
                {mode === FORM_MODES.NEW ? 'צור טופס' : 'שמור טופס'}
            </Button>
        </section>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(FormContent);
