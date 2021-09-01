import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import createRootReducer from './rootReducer';

export const history = createBrowserHistory();

export default function configureStore(
    preloadedState = {}
) {
    const store = createStore(
        createRootReducer(history),
        preloadedState,
        compose(
            applyMiddleware(
                thunk,
            )
        )
    );

    return store;
}
