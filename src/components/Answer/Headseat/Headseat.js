import React, { useRef, useState } from "react";
import "./Headseat.css";
import { Button, OverlayTrigger, Modal } from "react-bootstrap";

import img_ntc from "../../../assets/tela_ntc.png";
import img_rasp from "../../../assets/fone/config1.png";

function Example() {
  const [show, setShow] = useState(false);
  const [showtwo, setShowtwo] = useState(false);

  const handleCloseTwo = () => setShowtwo(false);
  const handleShowTwo = () => setShowtwo(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="button-option">
        <Button variant="primary" onClick={handleShow}>
          NTC
        </Button>
        <Button variant="primary" onClick={handleShowTwo}>
          Raspberry
        </Button>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header  closeButton>
          <Modal.Title >Configuração do fone</Modal.Title>
        </Modal.Header >
        <Modal.Body className="config__ntc">
          <p>
            Vá nas configurações de sons, e na saída coloque na configuração do
            fone de ouvido, mesmo procedimento para a entrada!
          </p>
          <img src={img_ntc} />
        </Modal.Body>
      </Modal>

      <Modal
        show={showtwo}
        onHide={handleCloseTwo}
        backdrop="statictwo"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Configuração do fone</Modal.Title>
        </Modal.Header>
        <Modal.Body className="config__rasp">
          <p>
            Vá em preferências de sons, e na aba de saída e de entrada coloque
            para filetron ou audio adapter
          </p>
          <img src={img_rasp} />
        </Modal.Body>
      </Modal>
    </>
  );
}

const Headseat = () => {
  return (
    <div className="list_container">
      <Example />
    </div>
  );
};
export default Headseat;
