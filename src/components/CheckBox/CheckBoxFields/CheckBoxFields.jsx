import {
    TableRow,
    TableCell,
    Checkbox,
} from '@material-ui/core';
import { useState } from "react";
import RenderField from '../../RenderField/RenderField.jsx'

//RenderField
//import './RenderField.scss'
import React from 'react';
import { addField } from 'store/forms/forms.actions';
import { connect } from 'react-redux';
import DropDown from '../../DropDown/DropDown.jsx';
import DateUtils from "@date-io/moment";
import SearchBar from '../../SearchBar/SearchBar.jsx';
import CheckBox from '../CheckBox.jsx';
import ElementsCombine from '../../ElementsCombine/ElementsCombine.jsx'
import {  MuiPickersUtilsProvider } from '@material-ui/pickers';
import DatePicker from "react-date-picker";


const mapStateToProps = (state) => ({
    currentForm: state.forms.nissoi,
})

const mapDispatchToProps = (dispatch) => ({
    addField: (...args) => addField(...args)(dispatch),
});
class CheckBoxFields extends React.Component {
    constructor(props) {
        super(props)
        this.state ={
            values:{}
        }

       }
     handleChangeForm = (value, field) => {
        this.state.values[field.fieldName] = { valuess: value }
        console.log('CheckBoxFields-values', this.state.values)

        this.props.addField('yes its works',    this.state.values);
    }
    
     renderField = ( field) => {
        switch (field.type) {
            case 'select':
                return (
                    <DropDown field={field} handleSelectChange={this.handleChangeForm}>
    
                    </DropDown>
                );
            case 'date':
                return (
                    <MuiPickersUtilsProvider utils={DateUtils}>
                          <DatePicker value={new Date()}
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
                        <CheckBox onMarkChecboxFields={field.onMarkCheckbox} ></CheckBox>
                    </div>
                );
    
            case 'ElementsCombine':
                return (
                    <ElementsCombine display={field.display} field={field.elementsList}>
    
                    </ElementsCombine>
                )
            case 'Number':
                return (<input type="number" min="1900" max="2099" step="1" placeHolder="1900" 
                onChange={event => this.handleChangeForm(event.target.value, field)}/>
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
    render() {
     return   <div>
            <dev> {
                this.props.ChecboxFields
                    .filter((field) => field?.disableElement === undefined)
                    .map(
                        (field, index) =>
                            <TableRow style={{ width: '100%' }} key={index}>
                                <TableCell width="50%" align="right">
                                {this.renderField(field)}
                                </TableCell>
                                <TableCell width="50%" align="right">{field.displayName}</TableCell>
                            </TableRow>
                    )
            }
            </dev>

        </div>
        };
}
export default connect(mapStateToProps, mapDispatchToProps)(CheckBoxFields);

//export default CheckBoxFields