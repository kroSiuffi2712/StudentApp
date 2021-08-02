import {studentType} from "../constants/studentType"

import {studentsAction,studentAction,ActionWithPayload} from "../interfaces/action.interface"
import {studentsState, studentState} from "../interfaces/student.interface";

const initialState:studentState ={
    loading:false,
    data:{},
    error:""
}

export const studentReducer =(state=initialState, action:ActionWithPayload<studentAction>):studentState =>{
    switch(action.type){
        case studentType.CREATE_STUDENT_REQUEST:
            return {
                ...state,
                loading:true
            }
        case studentType.CREATE_STUDENT_SUCCESS:
            return{
                loading:false,
                data:action.payload,
                error:""
            }
        case studentType.CREATE_STUDENT_FAILURE:
            return{
                loading:false,
                data:{},
                error:action.payload
            }
        case studentType.UPDATE_STUDENT_REQUEST:
            return{
                ...state,
                loading:true,
            }
        case studentType.UPDATE_STUDENT_SUCCESS:
            return{
                loading:false,
                data:action.payload,
                error:""
            }
        case studentType.UPDATE_STUDENT_FAILURE:
            return{
                loading:false,
                data:{},
                error:action.payload
            }
        case studentType.DELETE_STUDENT_REQUEST:
            return{
                ...state,
                loading:true,
            }
        case studentType.DELETE_STUDENT_SUCCESS:
            return{
                loading:false,
                data:action.payload,
                error:""
            }
        case studentType.DELETE_STUDENT_FAILURE:
            return{
                loading:false,
                data:{},
                error:action.payload
            }
        case studentType.FETCH_STUDENT_REQUEST:
            return{
                ...state,
                loading:true
            }
        case studentType.FETCH_STUDENT_SUCCESS:
            return {
                loading:false,
                data:action.payload,
                error:""
            }
        case studentType.FETCH_STUDENT_FAILURE:
            return {
                loading:false,
                data:{},
                error:action.payload
            }
        case studentType.RESET_STUDENT:
            return {
                ...initialState
            }
        default:
            return state;
    }
}

const initialStateStudents:studentsState ={
    loading:false,
    data:[],
    error:""
}

export const studentsReducer = (state=initialStateStudents, action:ActionWithPayload<studentsAction>):studentsState =>{
    switch(action.type){
        case studentType.FETCH_STUDENTS_REQUEST:
            return{
                ...state,
                loading:true
            };
        case studentType.FETCH_STUDENTS_SUCCESS:
            return {
                loading: false,
                data: action.payload,
                error: "",
              };
        case studentType.FETCH_STUDENTS_FAILURE:
            return{
                loading:false,
                data:[],
                error:action.payload
                    
            };
        default:
            return state;
    }
}