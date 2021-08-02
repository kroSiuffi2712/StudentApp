import React from "react"
import {Link} from "react-router-dom"

interface Props {
    title:string;
    iconStyle:string;
    to:string;
    iconColor:string
    typeState:string
  }

const ButtonComponent = (props:Props) =>{
    const {iconStyle,to, iconColor,typeState} = props;
    return( 
    <>
        <div className= {`table-link text-warning`}>
            <span className="fa-stack">
            <Link to={{pathname: to, state: { type: typeState }}}>
            <span style={{"color": `${iconColor}`}}>
                <i className="fa fa-square fa-stack-2x"></i>
                <i className={iconStyle}></i>
                </span>
                </Link>
            </span>
        </div>
    </>
    )
}
export default ButtonComponent;

    /*
     <a href="#" className="table-link text-info">
            <span className="fa-stack">
                <i className="fa fa-square fa-stack-2x"></i>
                <i className="fa fa-pencil fa-stack-1x fa-inverse"></i>
            </span>
        </a>
    */