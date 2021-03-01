import React from "react";
import { Modal, Button} from "react-bootstrap";
import "../Documents/Documents.css";
import { Link } from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faBoxOpen} from '@fortawesome/free-solid-svg-icons';


function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Arquivos
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      
    </Modal>
  );
}

function App() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button onClick={() => setModalShow(true)}  className='trash__icon__button' variant="outline-light"> 
    
          <FontAwesomeIcon icon={faBoxOpen}/>
        
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}





const Documents = () => {
  return (
    <div className="Documents_container">
  
      <div className="Documentes__itens__save">
        <span>Arquivos</span>
        <App/>
      </div>
      <div className='Container__info'>
        
      </div>
    </div>
  );
};

export default Documents;
