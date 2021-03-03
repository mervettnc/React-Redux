import * as actionTypes from "../actions/actionTypes";
//import initialState from "./initialState";
const initialState = {
  Students: [],
  studentName: "",
  id:null,
 
};
export default function studenManagementReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_STUDENT_LIST:
      return { ...state, Students: action.payload };

    case actionTypes.POST_STUDENT_ADD:
    
      return {
        ...state,
       
        Students: [action.payload, ...state.Students],
      };

    case actionTypes.DELETE_STUDENT:
      return { ...state, Students:state.Students.filter(item => item.id !== action.payload)};


      case actionTypes.UPDATE_STUDENT:
        
        let newStudents = state.Students
        newStudents[newStudents.findIndex((item)=> item.id === action.payload.id)].student_name = action.payload.student_name
        return{
          ...state,
         Students: newStudents
            }
      
         
    default:
      return state;
  }
}
