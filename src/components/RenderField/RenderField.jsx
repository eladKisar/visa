import {
    TableRow,
    TableCell,
    TextField,
} from '@material-ui/core';

import DropDown from '../DropDown/DropDown.jsx'
import DateUtils from "@date-io/moment";
import SearchBar from '../SearchBar/SearchBar.jsx'
import CheckBox from '../CheckBox/CheckBox.jsx'
import { DateTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
const RenderField = ({field}) => {
  //  console.log('111111111')
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

        case 'list': 
        console.log('field.listOptions',field.listOptions)
        return(
            <dev> {
                field.listOptions
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

        )
        default:
            return <TextField
                dir="rtl"
                value={''}
                onChange={() => { }}
            />
    }

}

export default RenderField;