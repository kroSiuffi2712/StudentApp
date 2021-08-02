import axios from "axios"
import { ThunkAction } from "redux-thunk";
import { Dispatch, ActionCreator } from "redux"
import {studentType} from "../constants/studentType"

import { RootState} from "../store/store"
import {Student, Students }from "../interfaces/student.interface"
import {studentsAction} from "../interfaces/action.interface";

//Student
export const fetchStudentRequest =()=>{
    return{
        type:studentType.FETCH_STUDENT_REQUEST
    }
}

export const fetchStudentSuccess =(data:Student)=>{
    return{
        type:studentType.FETCH_STUDENT_SUCCESS,
        payload:data
    }
}

export const fetchStudentFailure =(error:string)=>{
    return{
        type:studentType.FETCH_STUDENT_SUCCESS,
        payload:error
    }
}

//students
export const fetchStudentsRequest =()=>{
    return{
        type:studentType.FETCH_STUDENTS_REQUEST
    }
}

export const fetchStudentsSuccess =(data:Students)=>{
    return{
        type:studentType.FETCH_STUDENTS_SUCCESS,
        payload:data
    }
}

export const fetchStudentsFailure =(error:string)=>{
    return{
        type:studentType.FETCH_STUDENTS_FAILURE,
        payload:error
    }
}

//create students
export const createStudentRequest =()=>{
    return{
        type:studentType.CREATE_STUDENT_REQUEST
    }
}
export const createStudentSuccess =(data:Student[])=>{
    return{
        type:studentType.CREATE_STUDENT_SUCCESS,
        payload:data
    }
}

export const createStudentFailure =(error:string)=>{
    return{
        type:studentType.CREATE_STUDENT_FAILURE,
        payload:error
    }
}

//update students
export const updateStudentRequest =()=>{
    return{
        type:studentType.UPDATE_STUDENT_REQUEST
    }
}
export const updateStudentSuccess =(data:Student)=>{
    return{
        type:studentType.UPDATE_STUDENT_SUCCESS,
        payload:data
    }
}

export const updateStudentFailure =(error:string)=>{
    return{
        type:studentType.UPDATE_STUDENT_FAILURE,
        payload:error
    }
}

//update students
export const deleteStudentRequest =()=>{
    return{
        type:studentType.DELETE_STUDENT_REQUEST
    }
}
export const deleteStudentSuccess =(data:string)=>{
    return{
        type:studentType.DELETE_STUDENT_SUCCESS,
        payload:data
    }
}

export const deleteStudentFailure =(error:string)=>{
    return{
        type:studentType.DELETE_STUDENT_FAILURE,
        payload:error
    }
}

export const resetStudent = () => {
    return {
      type: studentType.RESET_STUDENT,
    };
  };


//get student by Id
export const fetchStudent = (studentId:number) =>{
    return (dispath:Dispatch) =>{
        dispath(fetchStudentRequest());
        axios.get(`https://localhost:44333/api/students/${studentId}`).then(result=>{
            const data=result.data;
            dispath(fetchStudentSuccess(data));
        }).catch(error=>{
            const msgError = error.message;
            dispath(fetchStudentsFailure(msgError));
        })
    }
}

//get student list
export const fetchStudents:ActionCreator<ThunkAction<void, RootState, null, studentsAction>> = () => {
    return (dispath:Dispatch) =>{
        dispath(fetchStudentsRequest());
        axios.get("https://localhost:44333/api/students").then(result=>{
            const data=result.data;
            dispath(fetchStudentsSuccess(data));
        }).catch(error=>{
            const msgError = error.message;
            dispath(fetchStudentsFailure(msgError));
        })
    }
}

//create student
export const createStudent = (student:Student) =>{
    return (dispath:Dispatch) =>{
        dispath(createStudentRequest());
        axios({
            method: 'POST',
            headers: {
              "Content-Type": "application/json"
            },
            url: 'https://localhost:44333/api/students',
            data: {
                "id": student.id,
                "userName": student.userName,
                "firstName": student.firstName,
                "lastName": student.lastName,
                "age": student.age,
                "career": student.career,
            }
        }).then(result=>{
            const data=result.data;
            dispath(createStudentSuccess(data));
        }).catch(error=>{
            const msgError = error.message;
            dispath(createStudentFailure(msgError));
        })
    }
}

//update student
export const updateStudent = (student:Student) =>{
    console.log(student);
    return (dispath:Dispatch) =>{
        dispath(updateStudentRequest());
        axios({
            method: 'PUT',
            headers: {
              "Content-Type": "application/json"
            },
            url: `https://localhost:44333/api/students/${student.id}`,
            data: {
                "id": student.id,
                "userName": student.userName,
                "firstName": student.firstName,
                "lastName": student.lastName,
                "age": student.age,
                "career": student.career
            }
        }).then(result=>{
            const data=result.data;
            dispath(updateStudentSuccess(data));
        }).catch(error=>{
            const msgError = error.message;
            dispath(updateStudentFailure(msgError));
        })
    }
}

//delete student
export const deleteStudent = (studentId:number) =>{
    return (dispath:Dispatch) =>{
        dispath(deleteStudentRequest());
        axios.delete(`https://localhost:44333/api/students/${studentId}`).then(result=>{
            const data=result.data;
            dispath(deleteStudentSuccess(data));
        }).catch(error=>{
            const msgError = error.message;
            dispath(deleteStudentFailure(msgError));
        })
    }
}

export const resetStudentFromStore = () => {
    return (dispatch:Dispatch) => {
      dispatch(resetStudent());
    };
  };
