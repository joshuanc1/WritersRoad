import axios from "axios";
import { ADD_REVIEW_FAILED, ADD_REVIEW_REQUEST, ADD_REVIEW_SUCCESS } from "../variables/reviewVariables"



export const addReview = (reviewData) => async(dispatch) => {
    try{
        dispatch({type: ADD_REVIEW_REQUEST});
        console.log(reviewData)
        const headerData = {
            headers: {
                "Content-Type": "application/json",   //multipart/form-data did not work for some reason.
            }
        };

        const {data} = await axios.post(
            `http://localhost:3001/api/review/${reviewData.bookId}`,
            reviewData,
            headerData
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