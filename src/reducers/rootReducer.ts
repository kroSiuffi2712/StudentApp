import {combineReducers} from "redux"
import {studentReducer, studentsReducer} from "./student.reducer";

const rootReducer = combineReducers({
    student:studentReducer,
    students:studentsReducer
});

export default rootReducer;