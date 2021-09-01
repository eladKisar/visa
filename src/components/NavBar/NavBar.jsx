import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Person, ExitToApp } from '@material-ui/icons';

import { logout } from 'store/authentication/authentication.actions';

import Logo from 'assets/logo.png';
import './NavBar.scss';

const mapStateToProps = (state) => ({
    user: state.authentication.user,
});

const mapDispatchToProps = (dispatch) => ({
    logout: (...args) => logout(...args)(dispatch)
});

const Navbar = ({
    companyName = 'ויזה',
    user,
    logout,
}) => {
    const history = useHistory();
    const logoClick = () => history.push('/');

    return (
        <nav className="navbar">
            <div className="logo" onClick={logoClick}>
                <img src={Logo} alt='visa-logo' />
                {companyName}
            </div>
            {
                user ?
                    <div className="user">
                        <ExitToApp onClick={logout} className='btn-logout' />
                        {user.username}
                        <Person className='icon-user' />
                    </div> :
                    null
            }
        </nav>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
