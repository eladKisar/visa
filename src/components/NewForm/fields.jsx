import {
    TableRow,
    TableCell,
} from '@material-ui/core';
import RenderField from '../RenderField/RenderField.jsx'
import React, { useState, useEffect } from "react";


const Fields = ({ fields }) => {
    const [lessThan24HoursTripState, setLessThan24HoursTrip] = useState(false);
    const [HotelOrAddress, setHotelOrAddress] = useState(['HOTEL', 'enum']);

    return (
        <dev>
            {
                fields
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



    );
};

////HotelOrAddress.indexOf(key) > -1)


// <div> {
//     Object.keys(listOptions) 
//       // .filter((key) => key === 'enum' || key === HotelOrAddress) 
//         .map((key) =>{                                   
//                 listOptions[key].map((item,index)  =>{
//                  <TableRow style={{ width: '100%' }} key={index}>
//                  <TableCell width="50%" align="right">
//                     {renderField(item)}
//                  </TableCell>
//                  <TableCell width="50%" align="right">{field.displayName}</TableCell>
//              </TableRow>
//             })

//         }

//         )
// }
// </div>
export default Fields;
