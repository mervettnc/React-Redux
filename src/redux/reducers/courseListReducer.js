import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState"

export default function courseListReducer(state=initialState.Courses,action){
    switch (action.type) {
        case actionTypes.GET_COURSE_LIST:
            return action.payload
        
    
        default:
            return state;
            
    }
}