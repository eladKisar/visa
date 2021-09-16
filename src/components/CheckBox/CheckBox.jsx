import {
    TableRow,
    TableCell,
    Checkbox,
} from '@material-ui/core';
import { useState } from "react";
import CheckBoxFields from './CheckBoxFields/CheckBoxFields.jsx';
import RenderField from '../RenderField/RenderField.jsx';
const CheckBox = ({ onMarkChecboxFields }) => {
    const [checkedState, setCheckedState] = useState(false);

    console.log('onMarkChecboxFields',onMarkChecboxFields)
    return (
        <div>
            <Checkbox id='CheckBox'
                onClick={
                    () => {
                         setCheckedState(!checkedState);
                        if(onMarkChecboxFields){
                            onMarkChecboxFields
                            .filter((field) => field.disableElement !== undefined)
                            .map((field) => {
                                     document.getElementById(`${field.disableElement}`).disabled = !checkedState
                            })
                        }
                     
                    }}>
            </Checkbox>
            {checkedState && onMarkChecboxFields ?
                <dev> {
                    <CheckBoxFields ChecboxFields={onMarkChecboxFields}/>                  
                }
                </dev>
                : <div />}
        </div>
    );
}
export default CheckBox