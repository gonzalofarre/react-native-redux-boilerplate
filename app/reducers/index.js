import { combineReducers } from 'redux';
import userReducer from './userReducer';

// Combine all the reducers
const rootReducer = combineReducers({
    userReducer: userReducer
    // ,[ANOTHER REDUCER], [ANOTHER REDUCER] ....
})

export default rootReducer;
