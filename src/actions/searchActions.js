import { SEARCH_BOOKS_FAILED, SEARCH_BOOKS_SUCCESS, SEARCH_BOOKS_REQUEST, SINGLE_BOOK_REQUEST, SINGLE_BOOK_SUCCESS, SINGLE_BOOK_FAILED, ADD_BOOK_LIBRARY_REQUEST, ADD_BOOK_LIBRARY_SUCCESS, ADD_BOOK_LIBRARY_FAILED, REMOVE_BOOK_LIBRARY_REQUEST, REMOVE_BOOK_LIBRARY_SUCCESS, REMOVE_BOOK_LIBRARY_FAILED } from "../variables/searchVariables";
import axios from "axios";
import {API_URL} from './config'

axios.defaults.withCredentials = true;


export const getSearchedBooks = (title) => async(dispatch) => {
    try{
        dispatch({type: SEARCH_BOOKS_REQUEST});

        const headerData = {
            headers: {
                "Content-type": "application/json"
            }
        }

        const {data} = await axios.get(
            `${API_URL}/api/search?title=${title}`,
            headerData
        )



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
            `${API_URL}/api/book/${isbn}`,
            headerData
        )
    

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

export const addBookToLibrary = (book) => async(dispatch) => {
    try{
        dispatch({type: ADD_BOOK_LIBRARY_REQUEST});

    
        const {data} = await axios.post(
            `${API_URL}/api/library`,
            book,
        );

            
        dispatch({
            type: ADD_BOOK_LIBRARY_SUCCESS,
            payload: data.user
        })

    } catch (error) {
        dispatch({
            type: ADD_BOOK_LIBRARY_FAILED,
            error: error.response.data.message
        })
    }
}

export const removeBookFromLibrary = (id) => async(dispatch) => {
    try{
        
        dispatch({type: REMOVE_BOOK_LIBRARY_REQUEST});
   
     

        const {data} = await axios.delete(
            `${API_URL}/api/library`,
            {data: {book:id}},
            
        )
        dispatch({
            type: REMOVE_BOOK_LIBRARY_SUCCESS,
            payload: data.user
        })

    } catch(error){
        dispatch({
            type: REMOVE_BOOK_LIBRARY_FAILED,
            error: error.response.data.message
        })
    }
}