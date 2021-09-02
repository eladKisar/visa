import { Provider } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { LoginPage } from 'pages/Login';
import { FormsPage, FormContent } from 'pages/Forms';
import { RegisterPage } from 'pages/Register';
import { NotFoundPage } from 'pages/NotFound';
import NavBar from 'components/NavBar/NavBar';
import configureStore from 'store/configure';

import  NewForm  from './pages/Forms/NewForm/NewForm';

import 'react-toastify/dist/ReactToastify.css';
import 'utils/constants/globals.css';

const store = configureStore();

const App = () => {
    return (
        <div className="app">
            <Provider store={store}>
                <Router>
                    <NavBar />
                    <Switch>
                        <Route exact path='/' component={NewForm} />
                        {/* <Route exact path='/login' component={LoginPage} />
                        <Route exact path='/register' component={RegisterPage} />
                        <Route exact path='/form' component={FormContent} />
                        <Route exact path='/form/:id' component={FormContent} />
                        <Route component={NotFoundPage} /> */}
                    </Switch>
                </Router>
            </Provider>
            <ToastContainer
                position="bottom-right"
                hideProgressBar={false}
                closeOnClick={true}
                newestOnTop={true}
                rtl={true}
            />
        </div>
    )
}

export default App;
