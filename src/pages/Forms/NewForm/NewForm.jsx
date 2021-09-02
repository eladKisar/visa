import React, { useState, useEffect } from 'react';
import Fields from '../../../components/NewForm/fields';
import Pagination from '../../../components/NewForm/pagination';
import './NewForm.scss';
import {FormFields} from '../../../utils/constants/form';

const NewForm = () => {
    
    const [currentPage, setCurrentPage] = useState(1);
    const currentFields = Object.values(FormFields[currentPage]);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    // Change page
    return (
        <div className='container mt-5'>
            <Fields fields={currentFields} />
            <Pagination
                totalPages={Object.keys(FormFields).length}
                paginate={paginate}
                />
        </div>
    );
};

export default NewForm;
