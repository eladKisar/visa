import {
    TableRow,
    TableCell,
} from '@material-ui/core';
import RenderField from '../RenderField/RenderField.jsx'
import React, { useState, useEffect } from "react";


const Fields = ({ fields }) => {
    const [lessThan24HoursTripState, setLessThan24HoursTrip] = useState(false);
    const [HotelOrAddress, setHotelOrAddress] = useState(['HOTEL', 'enum']);

    //   useEffect(() => {
    //     // Should not ever set state during rendering, so do this in useEffect instead.
    //     setHotelOrAddress('HOTEL');
    //   }, []);

    // const [checkedState, setCheckedState]= useState(
    //     new Array(5).fill(false) 
    //   );

    //   const handleOnChange = (position) => {
    //     const updatedCheckedState = setLessHotelOrAddress.map((item, index) =>
    //       index === position ? !item : item
    //     );

    //     setLessHotelOrAddress(updatedCheckedState);
    // }
    const handleChange = (event, field) => {
        const { value } = event.target;

        switch (value) {
            case 'LASS_THAN_24_HOURS':
                setLessThan24HoursTrip(false)
            case 'HOTEL':
                if (HotelOrAddress.indexOf(value) === -1) {
                    setHotelOrAddress([...HotelOrAddress, value]);
                }

            case 'ADDRESS':
                if (HotelOrAddress.indexOf(value) === -1) {
                    setHotelOrAddress([...HotelOrAddress, value]);
                }


            default:

        }
    }
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
