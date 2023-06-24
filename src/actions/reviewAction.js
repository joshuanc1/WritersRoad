import axios from "axios";
import { ADD_REVIEW_FAILED, ADD_REVIEW_REQUEST, ADD_REVIEW_SUCCESS, BOOK_REVIEW_LIST_REQUEST, BOOK_REVIEW_LIST_SUCCESS, BOOK_REVIEW_LIST_FAILED, DELETE_REVIEW_REQUEST, DELETE_REVIEW_SUCCESS, DELETE_REVIEW_FAILED } from "../variables/reviewVariables"
import {API_URL} from './config'


export const addReview = (reviewData) => async(dispatch) => {
    try{
        dispatch({type: ADD_REVIEW_REQUEST});
        
       
        const {bookId} = reviewData;
       

        

        const {data} = await axios.post(
            `${API_URL}/api/review/${bookId}`,
            reviewData
        )

        dispatch({
            type: ADD_REVIEW_SUCCESS,
            payload: data.review
        })

    } catch (error) {
        dispatch({
            type: ADD_REVIEW_FAILED,
            payload: error.response.data.message
        })
    }
}

export const getListOfReviews = (bookISBN) => async(dispatch) => {
    try{
        dispatch({type: BOOK_REVIEW_LIST_REQUEST});

        const {data} = await axios.get(
            `${API_URL}/api/review/${bookISBN}`,
        )

        console.log(data);
        
        dispatch({
            type: BOOK_REVIEW_LIST_SUCCESS,
            payload: data.reviewList,
        })

    } catch (error) {
        dispatch({
            type: BOOK_REVIEW_LIST_FAILED,
            payload: error.response.data.message
        })
    }
}

export const deleteReview = (id) => async(dispatch) => {
    try{
        dispatch({type: DELETE_REVIEW_REQUEST});

        const {data} = await axios.delete(`${API_URL}/api/review/${id}`);

        dispatch({
            type: DELETE_REVIEW_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: DELETE_REVIEW_FAILED,
            payload: error.response.data.message
        })
    }
}