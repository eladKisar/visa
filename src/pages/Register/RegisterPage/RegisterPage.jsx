import { useEffect } from 'react';
import { connect } from 'react-redux';

import { register } from 'store/authentication/authentication.actions';

import RegisterForm from '../RegisterForm/RegisterForm';

import './RegisterPage.scss';


const mapStateToProps = (state) => ({
    user: state.authentication.user,
});

const mapDispatchToProps = (dispatch) => ({
    register: (...args) => register(...args)(dispatch)
});


const RegisterPage = ({
    user,
    history,
    register,
}) => {
    useEffect(() => {
        if (user !== null) {
            history.push('/');
        }
    }, [user, history])

    const formSubmit = (username, password) => {
        register(username, password);
    }
    return (
        <main className="register-page">
            <RegisterForm onSubmit={formSubmit} history={history} />
        </main>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);
