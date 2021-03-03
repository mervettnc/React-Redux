import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState"

export default function classroomListReducer(state=initialState.Classrooms,action){
    switch (action.type) {
        case actionTypes.GET_CLASSROOM_LIST:
            return action.payload
        
    
        default:
            return state;
            
    }
}