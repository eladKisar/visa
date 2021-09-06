import {
    TextField,
} from '@material-ui/core';
import DropDown from '../DropDown/DropDown.jsx'
import DateUtils from "@date-io/moment";
import SearchBar from '../SearchBar/SearchBar.jsx'
import CheckBox from '../CheckBox/CheckBox.jsx'
import { DateTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
const RenderField = ({field}) => {
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
                    <CheckBox field={field.onMarkCheckbox}></CheckBox>
                </div>
            );
        default:
            return <TextField
                dir="rtl"
                value={''}
                onChange={() => { }}
            />
    }

}

export default RenderField;