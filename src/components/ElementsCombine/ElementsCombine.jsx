import {
    TableRow,
    TableCell,
} from '@material-ui/core';
import './ElementsCombine.css'
import RenderField from '../RenderField/RenderField.jsx'
const ElementsCombine = ({ field, display }) => {
    return (
        <div >

            {display == 'inline' ?
                <div className='rowC'>
                    {
                        field
                            .filter(({ field }) => field !== 'id')
                            .map(
                                (field) =>
                                    <div>
                                        <h3>{field.displayName}</h3>
                                        <RenderField field={field}></RenderField>

                                    </div>
                            )

                    }
                </div>
                : <dev> {
                    field
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

            }
        </div>
    );
}
export default ElementsCombine