import React , {FC,useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux"

import {fetchStudents,deleteStudent} from "../../actions/student.actions";
import { RootState} from "../../store/store"
import {Student} from "../../interfaces/student.interface"

import  "../../styles/table.style.css"

import ButtonComponent from "../IconButton";
import Loading from "../Pages/Loading";

const StudentComponent: FC = () => { 
    const dispatch = useDispatch();
    const students = useSelector((state:RootState) => state.students);
    const student = useSelector((state:RootState) => state.student);

    useEffect(()=>{
        if (student.loading===false){
        dispatch(fetchStudents());
        }
    }, [dispatch,student.loading])

    const handleClick =(id:number)=>{
        dispatch(deleteStudent(id))
        dispatch(fetchStudents());
    }

    //<ButtonComponent key={`button-danger-${item.id}`} title="" iconStyle="fa fa-trash-o fa-stack-1x fa-inverse" to={`/student/${item.id}`} iconColor="Tomato" typeState="Delete"/>

    return (
        <section className="section ">
        <link rel="stylesheet" type="text/css" href="//netdna.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" />
        <hr />
        <div className="container bootstrap snippets bootdey">
            <div className="row">
                <div className="col-lg-12">
                    <div className="main-box no-header clearfix">
                        <div className="main-box-body clearfix">
                            <div className="table-responsive">
                                <table className="table user-list">
                                    <thead>
                                        <tr>
                                        <th><span className="text-center span-th">User Name</span></th>
                                        <th><span className="span-th">Full Name</span></th>
                                        <th className="text-center span-th"><span>Age</span></th>
                                        <th><span className="span-th">Career</span></th>
                                        <th>&nbsp;</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {students.data.map((item:Student) => (
                                        <tr key={`tr-${item.id}`}>
                                            <td key={`td-img-${item.id}`}>
                                                <img key={`img-${item.id}`} src={`https://bootdey.com/img/Content/avatar/avatar${item.id}.png`} alt="" />
                                            </td>
                                            <td key={`td-name-${item.id}`}>{`${item.firstName} ${item.lastName}`}</td>
                                            <td key={`td-label-${item.id}`} className="text-center">
                                                <span className="label label-default">{item.age}</span>
                                            </td>
                                            <td key={`td-career-${item.id}`}>
                                            <td key={`career-${item.id}`}>{item.career}</td>
                                            </td>
                                            <td key={`td-button-${item.id}`}>
                                                <div key={`div-${item.id}`} className="d-flex flex-row">
                                                    <ButtonComponent key={`button-warning-${item.id}`}  title="" iconStyle="fa fa-search-plus fa-stack-1x fa-inverse" to={`/student/${item.id}`} iconColor="Dodgerblue" typeState="Search"/>
                                                    <ButtonComponent key={`button-info-${item.id}`}  title="" iconStyle="fa fa-pencil fa-stack-1x fa-inverse" to={`/student/${item.id}`} iconColor="gold" typeState="Edit"/>
                                                    <button className="btn m-0 p-0" onClick={()=>handleClick(item.id)}>
                                                        <span className="fa-stack" style={{"color": "Tomato"}}>
                                                            <i className="fa fa-square fa-stack-2x"></i>
                                                            <i className="fa fa-trash-o fa-stack-1x fa-inverse"></i>
                                                        </span>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</section>)
}
export default StudentComponent;