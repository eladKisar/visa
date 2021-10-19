import { LOAD_PAGES, NEXT_PAGE, PREV_PAGE } from './pages.types';

const initialState = {
    pages: {},
    currentPage: {
        number: 0,
        content: {}
    },
}

const pagesReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case LOAD_PAGES:
            return { ...state, pages: payload.pages };
        case NEXT_PAGE:
            return {
                ...state,
                pages: {
                    ...state.pages,
                    [state.currentPage.number]: {
                        ...payload.page
                    }
                },
                currentPage: {
                    ...initialState.currentPage,
                    number: state.currentPage.number + 1,
                    content: {
                        ...state.pages[state.currentPage.number + 1],
                    },
                },
            };
        case PREV_PAGE: {
            return {
                ...state,
                pages: {
                    ...state.pages,
                    [state.currentPage.number]: {
                        ...payload.page
                    }
                },
                currentPage: {
                    ...initialState.currentPage,
                    number: state.currentPage.number - 1,
                    content: {
                        ...state.pages[state.currentPage.number - 1],
                    },
                },
            };
        }
        default:
            return state;
    }
}

export default pagesReducer;
