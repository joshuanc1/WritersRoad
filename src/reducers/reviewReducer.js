import { ADD_REVIEW_FAILED, ADD_REVIEW_REQUEST, ADD_REVIEW_SUCCESS, DELETE_REVIEW_FAILED, DELETE_REVIEW_REQUEST, DELETE_REVIEW_SUCCESS, BOOK_REVIEW_LIST_REQUEST, BOOK_REVIEW_LIST_SUCCESS, BOOK_REVIEW_LIST_FAILED, USER_REVIEW_LIST_REQUEST, USER_REVIEW_LIST_SUCCESS, USER_REVIEW_LIST_FAILED } from "../variables/reviewVariables"




export const reviewReducer = (state = {review: []}, {type, payload}) => {
    switch(type) {
        case ADD_REVIEW_REQUEST:
        case DELETE_REVIEW_REQUEST:
            return {
                ...state,
                loading: true
            }
        case ADD_REVIEW_SUCCESS:
        case DELETE_REVIEW_SUCCESS:
            return {
                ...state,
                loading: false,
                review: payload
            }
        case ADD_REVIEW_FAILED:
        case DELETE_REVIEW_FAILED:
            return {
                ...state,
                error: payload
            }
        default:
            return state;
        
    }

}
export const reviewListReducer = (state = {reviewList: []}, {type, payload}) => {
    switch(type) {
        case BOOK_REVIEW_LIST_REQUEST:
        case USER_REVIEW_LIST_REQUEST:
            return {
                ...state,
                loading: true
            }
        case BOOK_REVIEW_LIST_SUCCESS:
        case USER_REVIEW_LIST_SUCCESS:
            return {
                ...state,
                loading: false,
                reviewList: payload,
            }
        case BOOK_REVIEW_LIST_FAILED:
        case USER_REVIEW_LIST_FAILED:
            return {
                ...state,
                error: payload,
            }
        default:
            return state;
        
    }
}