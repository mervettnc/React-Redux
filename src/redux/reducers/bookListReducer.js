import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState"

export default function bookListReducer(state=initialState.Books,action){
    switch (action.type) {
        case actionTypes.GET_BOOK_LIST:
            return action.payload
        
    
        default:
            return state;
            
    }
}