import {studentType} from "../constants/studentType"
import {Students} from "./student.interface"

export interface Action {
    type:string,
    payload:any
  }
/***********************STUDENTS ACTION TYPE*************************/
interface studentsRequestAction { 
    type: typeof studentType.FETCH_STUDENTS_REQUEST;
}

interface studentsSuccessAction { 
    type: typeof studentType.FETCH_STUDENTS_SUCCESS;
    payload: Students;
}

interface studentsFailureAction { 
    type: typeof studentType.FETCH_STUDENTS_FAILURE;
    payload: string;
}
/***********************STUDENT ACTION TYPE*************************/
interface studentRequestAction { 
  type: typeof studentType.FETCH_STUDENT_REQUEST;
}

interface studentSuccessAction { 
  type: typeof studentType.FETCH_STUDENT_SUCCESS;
  payload: Students;
}

interface studentFailureAction { 
  type: typeof studentType.FETCH_STUDENT_FAILURE;
  payload: string;
}
/******************************************************************/
export interface ActionWithPayload<T> extends Action {
  payload: T;
} 
export type studentsAction = studentsRequestAction | studentsSuccessAction  | studentsFailureAction  ;
export type studentAction = studentRequestAction | studentSuccessAction  | studentFailureAction  ;
