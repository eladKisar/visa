import React, { useState, useEffect } from 'react';
import Fields from '../../../components/NewForm/fields';
import Pagination from '../../../components/NewForm/pagination';
import './NewForm.scss';
import {FORM_FIELDS} from '../../../utils/constants/form';

const NewForm = () => {
    
    const [currentPage, setCurrentPage] = useState(1);
    const currentFields = Object.values(FORM_FIELDS[currentPage]);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    // Change page
    return (
        <div className='container mt-5'>
            <Fields fields={currentFields} />
            <Pagination
                totalPages={Object.keys(FORM_FIELDS).length}
                paginate={paginate}
                />
        </div>
    );
};

export default NewForm;
