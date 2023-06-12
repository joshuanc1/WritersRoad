import { LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, LOGIN_USER_FAILED, REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS, REGISTER_USER_FAILED, LOGOUT_USER_SUCCESS, LOGOUT_USER_FAILED } from "../variables/userVariables";


export const userReducer = (state = {loading: false, isAuthenticated: false, user: {}}, {type, payload}) => {
    switch(type){
        case LOGIN_USER_REQUEST:
        case REGISTER_USER_REQUEST:
            return {
                loading: true,
                isAuthenticated: false,
            };
        case LOGIN_USER_SUCCESS:
        case REGISTER_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                user: payload,
            };
        case LOGOUT_USER_SUCCESS:
            return {
                loading: false,
                isAuthenticated: false,
                user: null,
            };
        case LOGIN_USER_FAILED:
        case REGISTER_USER_FAILED:
        case LOGOUT_USER_FAILED:
            return {
                ...state,
                loading: false,
                isAuthenticated: false,
                user: null,
                error: payload,
            };
        default:
            return {
                ...state,
            }
    }

}