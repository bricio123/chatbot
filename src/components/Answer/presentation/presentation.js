import React from "react";
import "../presentation/presentation.css";
import {
  ButtonGroup,
  Button,
  Modal,
  Popover,
  OverlayTrigger,
} from "react-bootstrap";
import config1 from "../../../assets/fone/config1.png";
//respostas da caixa
const popover = (
  <Popover id="popover-basic">
    <Popover.Title as="h3">Navegador travou?</Popover.Title>
    <Popover.Content>
      <ul>
        <li>1- Verifique o click clean.</li>
        <li>2- Tire o navegar do segundo Plano.</li>
        <li>3-</li>
      </ul>
    </Popover.Content>
  </Popover>
);
const popoverTwo = (
  <Popover id="popover-basic">
    <Popover.Title as="h3">Navegador travou?</Popover.Title>
    <Popover.Content>
      <ul>
        <li>1- Verifique o click clean.</li>
        <li>2- Tire o navegar do segundo Plano.</li>
      </ul>
    </Popover.Content>
  </Popover>
);

//opcoes no modal
function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Escolha</Modal.Title>
      </Modal.Header>
      <Modal.Body></Modal.Body>
    </Modal>
  );
}

const MessageOne = () => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div className="Container_all">
      <p>Temos aqui alguns erros mais recorrentes</p>

      <ButtonGroup className="button-list">
        <OverlayTrigger
          trigger="click"
          placement="top"
          className="button-select"
          overlay={popover}
        >
          <Button
            variant="outline-success"
            className="button-select"
            onClick={() => setModalShow(true)}
          >
            Listening
          </Button>
        </OverlayTrigger>

        <Button className="button-select">Dialer Caiu</Button>
        <Button className="button-select">Usuario não loga no dialer</Button>
        <Button className="button-select">Problemas no dialer</Button>
      </ButtonGroup>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
};
export default MessageOne;
