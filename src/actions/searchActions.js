import { SEARCH_BOOKS_FAILED, SEARCH_BOOKS_SUCCESS, SEARCH_BOOKS_REQUEST, SINGLE_BOOK_REQUEST, SINGLE_BOOK_SUCCESS, SINGLE_BOOK_FAILED } from "../variables/searchVariables";
import axios from "axios";

export const getSearchedBooks = (title) => async(dispatch) => {
    try{
        dispatch({type: SEARCH_BOOKS_REQUEST});

        const headerData = {
            headers: {
                "Content-type": "application/json"
            }
        }

        const {data} = await axios.get(
            `http://localhost:3001/api/search?title=${title}`,
            headerData
        )

        console.log(data.books);

        dispatch({
            type: SEARCH_BOOKS_SUCCESS,
            payload: data.books
        })
    } catch (error){
        dispatch({
            type: SEARCH_BOOKS_FAILED,
            payload: error.reponse.data.message,
        })
    }

}

export const getSingleBook = (isbn) => async(dispatch) => {
    try{
        dispatch({type: SINGLE_BOOK_REQUEST});
        const headerData = {
            headers: {
                "Content-type": "application/json"
            }
        }


        const {data} = await axios.get(
            `http://localhost:3001/api/book/${isbn}`,
            headerData
        )
        console.log(data.book);

        dispatch({
            type: SINGLE_BOOK_SUCCESS,
             payload: data.book
            });

    } catch(error) {
        dispatch({
            type: SINGLE_BOOK_FAILED, 
            payload: error.response.data.message
        });
    }
}