import Fields from '../../../components/NewForm/fields';
import Pagination from '../../../components/NewForm/pagination';
import './NewForm.scss';
import {FormFields} from '../../../utils/constants/form';

const NewForm = () => {

console.log('FormFields',FormFields[Object.keys(FormFields)[0]])

    // Change page
    return (
        <div className='container mt-5'>
            <Fields fields={FormFields[Object.keys(FormFields)[0]]} />
            <Pagination
                pageNumbers={10}
            />
        </div>
    );
};

export default NewForm;
