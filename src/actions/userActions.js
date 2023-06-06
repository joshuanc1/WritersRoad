import { LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, LOGIN_USER_FAILED, REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS, REGISTER_USER_FAILED, LOGOUT_USER_SUCCESS, LOGOUT_USER_FAILED } from "../variables/userVariables";
import axios from 'axios';




export const registerUser = (newUserData) => async(dispatch) => {
    try{
        dispatch({type: REGISTER_USER_REQUEST});

       
        const headerData = {
            headers: {
                "Content-Type": "application/json",   //multipart/form-data did not work for some reason.
            }
        };

        const { data } = await axios.post(
            'http://localhost:3001/user/register',
            newUserData,
            headerData
        );
    

        dispatch({
            type: REGISTER_USER_SUCCESS,
            payload: data.user
        });
    } catch(error) {
        dispatch({
            type: REGISTER_USER_FAILED,
            payload: error.response.data.message
        });
    }
}

export const login = (username, password) => async(dispatch) => {
    try {
        dispatch({
            type: LOGIN_USER_REQUEST,
        })

        const headerData = {
            "Content-Type": "application/json",
        }

        const {data} = await axios.post(
            'http://localhost:3001/user/login',
            {username, password},
            headerData,
        )

        dispatch({
            type: LOGIN_USER_SUCCESS,
            payload: data.user
        })

    } catch (error){
        dispatch({
            type: LOGIN_USER_FAILED,
            payload: error.response.data.message
        })
    }
}

export const logout = () => async(dispatch) => {
    try{
        await axios.get(
            'http://localhost:3001/user/logout'
        )
        dispatch({
            type: LOGOUT_USER_SUCCESS,
        })
    } catch (error) {
        dispatch({
            type: LOGOUT_USER_FAILED,
            payload: error.response.data.message
        })
    }
}