import { ADD_REVIEW_FAILED, ADD_REVIEW_REQUEST, ADD_REVIEW_SUCCESS, DELETE_REVIEW_FAILED, DELETE_REVIEW_REQUEST, DELETE_REVIEW_SUCCESS } from "../variables/reviewVariables"




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