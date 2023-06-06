import { SEARCH_BOOKS_FAILED, SEARCH_BOOKS_SUCCESS, SEARCH_BOOKS_REQUEST } from "../variables/searchVariables";
import axios from "axios";

export const getSearchedBooks = (title) => async(dispatch) => {
    try{
        dispatch({type: SEARCH_BOOKS_REQUEST});

        const headerData = {
            headers: {
                "Content-type": "application/json"
            }
        }

        
        /*const { data } = await axios.get(
            `http://openlibrary.org/search.json?title=${searchedBook}`,
            headerData
        )*/

        const {data} = await axios.get(
            `http://localhost:3001/search?title=${title}`,
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