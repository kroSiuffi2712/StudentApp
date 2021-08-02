import React from "react"

interface Props{
    label:string;
    value:any;
    disabled:boolean
    idInput:string, 
    nameInput:string
    handleInputChange:React.ChangeEventHandler<HTMLInputElement>
}

const RowForm = (props:Props) =>{
    const {idInput, nameInput, label,value, disabled,handleInputChange} =props;
    return(
        <div className="row mb-3">
                <div className="col-sm-3">
                    <h6 className="mb-0">{label}</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                    <input type="text" id={idInput} name={nameInput} className="form-control" defaultValue={value} disabled={disabled} onChange={(e) => handleInputChange(e)}/>
                </div>
        </div>
    );
}
export default RowForm;