import { connect } from 'react-redux';
import DropDown from '../DropDown/DropDown.jsx';
import DateUtils from "@date-io/moment";
import SearchBar from '../SearchBar/SearchBar.jsx';
import CheckBox from '../CheckBox/CheckBox.jsx';
import ElementsCombine from '../ElementsCombine/ElementsCombine.jsx'
import { DateTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { addField } from 'store/forms/forms.actions';
import './RenderField.scss'
import React from 'react';
import DatePicker from "react-date-picker";

const mapStateToProps = (state) => ({
    currentForm: state.forms.nissoi,
})

const mapDispatchToProps = (dispatch) => ({
    addField: (...args) => addField(...args)(dispatch),
});


class RenderField extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            date: new Date()
        }
    }

    containsObject = (list, obj) => {
        return list.findIndex(elem => elem.fieldName === obj.fieldName)
    }

    handleCheckBox = (value,field) => {
            if (value) {
                if (field.parentsField) {
                    let parentsDictValue = this.props.currentForm[field.parentsField[0]].value;
                    const obj = { fieldName: field.fieldName, value: [] }
                    const index = this.containsObject(parentsDictValue, obj);
                    if (index > -1) {
                        parentsDictValue[index].value = value;
                    } else {
                        parentsDictValue.push(obj)
                    }
                }
                this.props.addField(field.fieldName, []);

            }
    }
    handleChangeForm = (value, field) => {
        console.log('handleChangeForm - value', value)
         console.log('handleChangeForm - field', field)

     
            if (field.parentsField === undefined) {
                this.props.addField(field.fieldName, value);
            } else {
                let parentsDictValue = this.props.currentForm[field.parentsField[0]].value;
                const obj = { fieldName: field.fieldName, value: value }
                const index = this.containsObject(parentsDictValue, obj);
                if (index > -1) {
                    parentsDictValue[index].value = value;
                } else {
                    parentsDictValue.push(obj)
                }
                this.props.addField(field.fieldName, value);


            }
            // 
       
    }

    render() {
        console.log('this.props.currentForm', this.props.currentForm)
        const field = this.props.field;

        switch (field.type) {
            case 'select':
                return (
                    <DropDown field={field} handleSelectChange={this.handleChangeForm}>

                    </DropDown>
                );
            case 'date':
                return (
                    <MuiPickersUtilsProvider utils={DateUtils}>
                        <DatePicker value={this.state.date}
                        />
                        {/* <DateTimePicker
                        autoOk
                        ampm={false}
                        disableFuture
                        value={null}
                        onChange={date => this.handleChange(date, field)}
                        dir="rtl"
                        placeholder="January 1st 00:00"
                    /> */}
                    </MuiPickersUtilsProvider>
                );
            case 'searchBar':
                return (
                    <SearchBar field={field} handleChange={this.handleChangeForm}>

                    </SearchBar>
                );
            case 'Checkbox':
                return (
                    <div>
                        <CheckBox onMarkChecboxFields={field.onMarkCheckbox} field={field} handleChange={this.handleCheckBox}></CheckBox>
                    </div>
                );

            case 'ElementsCombine':
                return (
                    <ElementsCombine display={field.display} field={field.elementsList}>

                    </ElementsCombine>
                )
            case 'Number':
                return (<input type="number" min="1900" max="2099" step="1" placeHolder="1900"
                    onChange={event => this.handleChangeForm(event.target.value, field)} />
                )
            case 'Textarea':
                return (<textarea
                    id={field.field}
                    placeHolder={field.placeHolder || ''}
                    dir="rtl"
                    // value={''}
                    onChange={event => this.handleChangeForm(event.target.value, field)}
                />)
            default:
                return <input
                    id={field.field}
                    dir="rtl"
                    //  value={ ''}
                    maxlength={field.maxlength || "2000"}
                    onChange={event => this.handleChangeForm(event.target.value, field)}
                />
        }
    }


}
export default connect(mapStateToProps, mapDispatchToProps)(RenderField);
