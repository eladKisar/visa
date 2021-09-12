import './RenderField.scss'
import DropDown from '../DropDown/DropDown.jsx';
import DateUtils from "@date-io/moment";
import SearchBar from '../SearchBar/SearchBar.jsx';
import CheckBox from '../CheckBox/CheckBox.jsx';
import ElementsCombine from '../ElementsCombine/ElementsCombine.jsx'
import { DateTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
const RenderField = ({ field }) => {
    switch (field.type) {
        case 'select':
            return (
                <DropDown field={field}>

                </DropDown>
            );
        case 'date':
            return (
                <MuiPickersUtilsProvider utils={DateUtils}>
                    <DateTimePicker
                        autoOk
                        ampm={false}
                        disableFuture
                        value={null}
                        onChange={() => { }}
                        dir="rtl"
                        placeholder="January 1st 00:00"
                    />
                </MuiPickersUtilsProvider>
            );
        case 'searchBar':
            return (
                <SearchBar>

                </SearchBar>
            );
        case 'Checkbox':
            return (
                <div>
                    <CheckBox onMarkChecboxFields={field.onMarkCheckbox}></CheckBox>
                </div>
            );

        case 'ElementsCombine':
            return (
                <ElementsCombine display={field.display} field={field.elementsList}>

                </ElementsCombine>
            )
        case 'Number':
            return (<input type="number" min="1900" max="2099" step="1" value="1900" />
            )
        case 'Textarea':
            return (<textarea
                id={field.field}
                placeHolder={field.placeHolder || ''}
                dir="rtl"
                value={''}
                onChange={() => { }}
            />)
        default:
            return <input
                id={field.field}
                dir="rtl"
               // value={''}
                maxlength={field.maxlength || "2000"}
                onChange={() => { }}
            />
    }

}

export default RenderField;