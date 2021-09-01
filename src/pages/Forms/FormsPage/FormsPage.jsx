import { connect } from 'react-redux';
import { useEffect, useState } from 'react';

import FlowBar from 'components/FlowBar/FlowBar';
import FormList from '../FormList/FormList';
import { openNewPage } from 'utils/page';
import { setForm } from 'store/forms/forms.actions';

import './FormsPage.scss';

const mapStateToProps = (state) => ({
    user: state.authentication.user,
});

const mapDispatchToProps = (dispatch) => ({
    setForm: (...args) => setForm(...args)(dispatch),
});

const FormsPage = ({
    user,
    history,
}) => {
    useEffect(() => {
        if (user === null) {
            history.push('/login');
        }
    }, [user, history]);

    const [selectedStep, setSelectedStep] = useState('partial');

    const editFormClick = (form) => {
        openNewPage(`/form/${form.id}`);
    }

    const createFormClick = (_event) => {
        openNewPage('/form');
    }

    return (
        <main className="forms-page">
            <FlowBar createFormClick={createFormClick} selectedStep={selectedStep} stepClick={setSelectedStep} />
            <FormList editFormClick={editFormClick} selectedStep={selectedStep} />
        </main>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(FormsPage);
