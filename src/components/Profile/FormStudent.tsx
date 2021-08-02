import React, {useEffect,useState} from "react"
import {useDispatch, useSelector} from "react-redux"
import { useParams } from "react-router-dom";
import { RootState} from "../../store/store"

import {fetchStudent,updateStudent,resetStudentFromStore} from "../../actions/student.actions"

import RowForm from "./RowForm";
//import {Student} from "../../interfaces/student.interface"

interface Props{
    typeState:string
}

const FormStudent = (props:Props)=>{
    const {typeState}=props;
    const [sw,setSw]=useState(false)
    const { id } = useParams<Record<string, string | undefined>>();
    const dispatch = useDispatch();
    const student = useSelector((state:RootState) => state.student);

    useEffect(()=>{
            dispatch(fetchStudent(Number(id)));

            //cleanUp
            return () => {
                dispatch(resetStudentFromStore());
            };
    },[dispatch,id])

    useEffect(()=>{
        if(sw===true && student.loading===false){
            dispatch(fetchStudent(Number(id)));
            setSw(false);
        }
    },[dispatch,id,sw,student.loading])

    useEffect(()=>{
        if(student.data.id !==0){
            setData(student.data)
        }
    },[student])

    const [data, setData] = useState(student.data);

    const handleInputChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        setData({
            ...data,
            [event.target.name] : event.target.value
        })
    }

    const handleClick = () =>{
        setSw(true);
        dispatch(updateStudent(data))
    }

    return(<div className="col-lg-8">
    <div className="card">
        <div className="card-body">
            <RowForm idInput="userName" nameInput="userName" label={"UserName"} value={data.userName} disabled={typeState ==="Search"?true:false} handleInputChange={handleInputChange}/>
            <RowForm idInput="firstName" nameInput="firstName" label={"First Name"} value={data.firstName} disabled={typeState ==="Search"?true:false} handleInputChange={handleInputChange}/>
            <RowForm idInput="lastName" nameInput="lastName" label={"Last Name"} value={data.lastName}  disabled={typeState ==="Search"?true:false} handleInputChange={handleInputChange}/>
            <RowForm idInput="age" nameInput="age" label={"Age"} value={data.age}  disabled={typeState ==="Search"?true:false} handleInputChange={handleInputChange}/>
            <RowForm idInput="career" nameInput="career" label={"Career"} value={data.career}  disabled={typeState ==="Search"?true:false} handleInputChange={handleInputChange}/>
            <div className="row">
                <div className="col-sm-3"></div>
                <div className="col-sm-9 text-secondary">
                    <input type="button" className="btn btn-primary px-4" value="Save Changes" onClick={handleClick} disabled={typeState ==="Search"?true:false}/>
                </div>
            </div>
        </div>
    </div>
</div>)
}
export default FormStudent;