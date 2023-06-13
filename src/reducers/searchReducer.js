
import { SEARCH_BOOKS_REQUEST, SEARCH_BOOKS_SUCCESS, SEARCH_BOOKS_FAILED, SINGLE_BOOK_REQUEST, SINGLE_BOOK_SUCCESS, SINGLE_BOOK_FAILED, ADD_BOOK_LIBRARY_REQUEST, ADD_BOOK_LIBRARY_SUCCESS, ADD_BOOK_LIBRARY_FAILED, REMOVE_BOOK_LIBRARY_REQUEST, REMOVE_BOOK_LIBRARY_SUCCESS, REMOVE_BOOK_LIBRARY_FAILED } from "../variables/searchVariables";

export const searchReducer = (state = {books:[]}, {type, payload}) => {
    switch(type) {
        case SEARCH_BOOKS_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case SEARCH_BOOKS_SUCCESS:
            return {
                ...state,
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

export const bookDetailReducer = (state = {book: {}}, {type, payload}) => {
    switch(type) {
        case SINGLE_BOOK_REQUEST:
            return {
                ...state,
                loading: true
            }
        case SINGLE_BOOK_SUCCESS:
            return {
                ...state,
                loading: false,
                book: payload
            }
        case SINGLE_BOOK_FAILED:
            return {
                ...state,
                error: payload
            }
        default:
            return {
                ...state
            }
        
    }
}

export const bookToLibrary = (state = {library:[]}, {type, payload}) => {
    switch(type) {
        case ADD_BOOK_LIBRARY_REQUEST:
        case REMOVE_BOOK_LIBRARY_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case ADD_BOOK_LIBRARY_SUCCESS:
        case REMOVE_BOOK_LIBRARY_SUCCESS:
            return {
                ...state,
                loading: false,
                library: payload
            };
        case ADD_BOOK_LIBRARY_FAILED:
        case ADD_BOOK_LIBRARY_FAILED:
            return {
                ...state,
                loading: false,
                error: payload
            };
        default: {
            return state
        }
        
    }
}