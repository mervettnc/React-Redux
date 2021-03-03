import { combineReducers } from "redux";
import changeCategoryReducer from "./changeCategoryReducer";
import getCategoryReducer from "./getCategoryReducer"
//import studentListReducer from "./studentListReducer"
import courseListReducer from "./courseListReducer";
import classroomListReducer from "./classroomListReducer"
import lecturerListReducer from "./lecturerListReducer"
import bookListReducer from "./bookListReducer"
//import studentAddReducer from "./studentAddReducer";
import studentManagementReducer from "./studentManagementReducer"

 const rootReducer = combineReducers({

    changeCategoryReducer,
    getCategoryReducer,
    //studentListReducer,
    courseListReducer,
    classroomListReducer,
    lecturerListReducer,
    bookListReducer,
   // studentAddReducer,
    studentManagementReducer
})

export default rootReducer;