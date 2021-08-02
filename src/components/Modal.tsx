import {useState} from "react"
import {Button} from "react-bootstrap"

import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

interface Props {
    //React.MouseEventHandler<HTMLButtonElement>;
    handleClose:() => void;
    handleShow:() => void;
    show:boolean
    setShow:React.Dispatch<React.SetStateAction<boolean>>
  }

const ModalComponent=(props:Props)=>{
    const {handleShow,show,handleClose,setShow } = props;
    
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Launch static backdrop modal
        </Button>
  
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            I will not close if you click outside me. Don't even try to press
            escape key.
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary">Understood</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  export default ModalComponent;