import { SEARCH_BOOKS_REQUEST, SEARCH_BOOKS_SUCCESS, SEARCH_BOOKS_FAILED } from "../variables/searchVariables";

export const searchReducer = (state = {}, {type, payload}) => {
    switch(type) {
        case SEARCH_BOOKS_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case SEARCH_BOOKS_SUCCESS:
            return {
                loading: false,
                books: payload
            };
        case SEARCH_BOOKS_FAILED:
            return {
                ...state,
                error: payload
            };
        default:
            return state;
    }
}