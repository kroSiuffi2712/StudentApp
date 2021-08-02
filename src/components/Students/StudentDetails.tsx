import React from "react"
import {useLocation} from "react-router-dom";

import FormStudent from "../Profile/FormStudent";
import SocialNetworkStudent from "../Profile/SocialNetworkStudent";

//import {Student} from "../../interfaces/student.interface"

const StudentDetails = ()=>{
    const location = useLocation()  
    const { type } :any = location.state
return (
<div className="container m-3">
    <div className="main-body">
        <div className="row">
            <SocialNetworkStudent />
            <FormStudent typeState={type}/>
        </div>
    </div>
</div>)
}
export default StudentDetails