import { useEffect } from 'react';
import { connect } from 'react-redux';

import { login } from 'store/authentication/authentication.actions';

import LoginForm from '../LoginForm/LoginForm';

import './LoginPage.scss';


const mapStateToProps = (state) => ({
    user: state.authentication.user,
});

const mapDispatchToProps = (dispatch) => ({
    login: (...args) => login(...args)(dispatch)
});


const LoginPage = ({
    user,
    history,
    login,
}) => {
    useEffect(() => {
        if (user !== null) {
            history.push('/');
        }
    }, [user, history])

    const formSubmit = (username, password) => {
        login(username, password);
    }
    return (
        <main className="login-page">
            <LoginForm onSubmit={formSubmit} history={history} />
        </main>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
