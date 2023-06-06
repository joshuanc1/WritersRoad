import { configureStore, combineReducers } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { userReducer } from './reducers/userReducer';

const reducer = combineReducers({

    user: userReducer,

});

const store = configureStore({
    reducer,
    middleware: [thunk],
    devTools: true,
})

export default store;