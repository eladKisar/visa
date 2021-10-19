import { LOAD_PAGES, NEXT_PAGE, PREV_PAGE } from './pages.types';

export const loadPages = () => dispatch => {
    // TODO: Implement page loading logic
    const pages = {};
    dispatch({ type: LOAD_PAGES, payload: { pages } });
}

export const nextPage = page => dispatch => {
    dispatch({ type: NEXT_PAGE, payload: { page } });
}

export const prevPage = page => dispatch => {
    dispatch({ type: PREV_PAGE, payload: { page } });
}
