import { configureStore, combineReducers} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { userReducer } from './reducers/userReducer';
import { searchReducer } from './reducers/searchReducer';

const reducer = combineReducers({

    user: userReducer,
    books: searchReducer,

});

const store = configureStore({
    reducer,
    middleware: [thunk],
    devTools: true,
})

export default store;