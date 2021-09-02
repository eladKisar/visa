import {    
    TableRow,
    TableCell,
    TextField,
    MenuItem,
} from '@material-ui/core';
import DateUtils from "@date-io/moment";
import SearchBar from '../SearchBar/SearchBar.jsx'

import { DateTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';

const Fields = ({ fields }) => {

    const renderField = ({ field, type, options }, form) => {
        console.log('type',type)
        console.log('options',options)

        switch (type) {
            case 'enum':
                return (
                    <TextField
                        select={true}
                        value={ ''}
                        onChange={() => {}}
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
                            value={ null}
                            onChange={()=>{}}
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
                
            default:
                return <TextField
                    dir="rtl"
                    value={ ''}
                    onChange={()=>{}}
                />
        }
    }
console.log('1111111',fields)
    return (
        <dev>
            {
                fields
                    .filter(({ field }) => field !== 'id')
                    .map(
                        (field, index) =>
                            <TableRow style={{ width: '100%' }} key={index}>
                                <TableCell width="50%" align="right">
                                    {renderField(field)}
                                </TableCell> 
                                <TableCell width="50%" align="right">{field.displayName}</TableCell>
                            </TableRow>
                    )
            }
        </dev>



    );
};

export default Fields;

{/* <ul className='list-group mb-4'>
{fields.map(post => (
  <li key={post.id} className='list-group-item'>
    {post.title}
  </li>
))}
</ul> */}
