import { connect } from 'react-redux';
import DropDown from '../DropDown/DropDown.jsx';
import DateUtils from "@date-io/moment";
import SearchBar from '../SearchBar/SearchBar.jsx';
import CheckBox from '../CheckBox/CheckBox.jsx';
import ElementsCombine from '../ElementsCombine/ElementsCombine.jsx'
import { DateTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { addField,removeField } from 'store/forms/forms.actions';
import './RenderField.scss'
import React from 'react';
import DatePicker from "react-date-picker";
import { ContactSupportTwoTone } from '@material-ui/icons';

const mapStateToProps = (state) => ({
    currentForm: state.forms.currentForm,
})

const mapDispatchToProps = (dispatch) => ({
    addField: (...args) => addField(...args)(dispatch),
    removeField: (...args) => removeField(...args)(dispatch),

});


class RenderField extends React.Component {
    state = {
        date: new Date()
    }

    deleteItemFromProps = (field) =>{
        this.props.removeField(field.fieldName)
        field.onMarkCheckbox?.forEach(item => {
            this.props.removeField(item.fieldName)
               if(item.onMarkCheckbox){
                this.deleteItemFromProps(item) }
             });              
    }
     containsObject = (obj, list) => {
        var i;
        for (i = 0; i < list.length; i++) {
            if (list[i].fieldName === obj.fieldName) {
                return true;
            }
        }
    
        return false;
    }
    handleChangeForm = (value, field) => {
        if(field.selectType){
            this.props.currentForm[field.selectType].FieldsVales[field.fieldName] = value;
        }else{
            if(value === '' || value === false){
                this.deleteItemFromProps(field)
            }else{
                this.props.addField(field.fieldName, value);  
            }
        }
     
    }

    render() {
        console.log('this.props.currentForm', this.props.currentForm)
        const field = this.props.field;
        switch (field.type) {
            case 'select': 
                return (
                    <DropDown field={field} handleSelectChange={this.handleChangeForm}
                    handleChangeForm={this.handleChangeForm}>

                    </DropDown>
                );
            case 'date':
                return (
                    <MuiPickersUtilsProvider utils={DateUtils}>
                        <DatePicker 
                        value={this.state.date}
                        dateFormat="dd/MM/yyyy"
                          onChange={date => {
                            this.handleChangeForm(date, field);
                            this.setState({date})}}/>
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
                        <CheckBox onMarkChecboxFields={field.onMarkCheckbox} field={field} handleChange={this.handleChangeForm}></CheckBox>
                    </div>
                );

            case 'ElementsCombine':
                return (
                    <ElementsCombine display={field.display} field={field.elementsList}>

                    </ElementsCombine>
                )
            case 'Number':
                return (<input                     id={field.fieldName}
                     type="number" min="1900" max="2099" step="1" placeHolder="1900"
                    onChange={event => this.handleChangeForm(event.target.value, field)} />
                )
            case 'Textarea':
                return (<textarea
                    id={field.fieldName}
                    placeHolder={field.placeHolder || ''}
                    dir="rtl"
                    // value={''}
                    onChange={event => this.handleChangeForm(event.target.value, field)}
                />)
            default:
                return <input
                    id={field.fieldName}
                    dir="rtl"
                    //  value={ ''}
                    maxlength={field.maxlength || "2000"}
                    onChange={event => this.handleChangeForm(event.target.value, field)}
                />
        }
    }


}
export default connect(mapStateToProps, mapDispatchToProps)(RenderField);
