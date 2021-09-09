import {
    TableRow,
    TableCell,
    TextField,
} from '@material-ui/core';

import DropDown from '../DropDown/DropDown.jsx';
import DateUtils from "@date-io/moment";
import SearchBar from '../SearchBar/SearchBar.jsx';
import CheckBox from '../CheckBox/CheckBox.jsx';
import ElementsCombine from '../ElementsCombine/ElementsCombine.jsx'
import { DateTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
const RenderField = ({ field }) => {
    console.log('field.type', field.type)
    console.log('field.field', field.field)

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
            console.log('99999999999999')
            return (
                <div>
                    <CheckBox field={field.onMarkCheckbox}></CheckBox>
                </div>
            );

        case 'ElementsCombine':
            return (
                <ElementsCombine display={field.display} field={field.elementsList}>

                </ElementsCombine>
            )
        default:
            return <input
                id={field.field}
                dir="rtl"
                value={''}
                onChange={() => { }}
            />
    }

}

export default RenderField;