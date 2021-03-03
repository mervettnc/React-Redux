import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState"

export default function lecturerListReducer(state=initialState.Lecturers,action){
    switch (action.type) {
        case actionTypes.GET_LECTURER_LIST:
            return action.payload
        
    
        default:
            return state;
            
    }
}