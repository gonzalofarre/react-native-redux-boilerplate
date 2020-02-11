import * as t from "../actions/types/userActionTypes" //Import the actions types constant we defined in our actions


const initialState = {
    dataState: 'Example'
  }

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case t.DATA_AVAILABLE:
            return {...state, data: action.data};
        default:
            return initialState;
    }
};


export default userReducer;