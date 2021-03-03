import React from "react";
import { Modal, Button, Card } from "react-bootstrap";
import "../Documents/Documents.css";
import { Link } from "react-router-dom";
import imgCode from '../../assets/img-code.jpeg';
import imgPlanilha from '../../assets/img-planilha.jpg';
import imgIp from '../../assets/img-ip.jpeg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBoxOpen,
  faFileWord,
  faCode,
  faNetworkWired,
} from "@fortawesome/free-solid-svg-icons";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Arquivos</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Aqui estão alguns arquivos que usamos</p>
        <div className="files__grid">
          <div>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={imgIp} />
              <Card.Body>
                <Card.Title>Mapeamento de Ip`s</Card.Title>
                <Card.Text>
                  Fazemos um mapeamento de ips em todas as raspberry para que nao tenha conflito de ips.
                </Card.Text>
                <Button variant="primary">Baixar</Button>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={imgPlanilha  }/>
              <Card.Body>
                <Card.Title>Login dos agentes</Card.Title>
                <Card.Text>
                  As vezes na hora de logar pode ser que não dê certo, então temos os logins e senhas de cada um para você verificar se está tudo certo
                </Card.Text>
                <Button variant="primary">Baixar</Button>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={imgCode} />
              <Card.Body>
                <Card.Title>Script</Card.Title>
                <Card.Text>
                    Uma mão amiga, os nossos scripts te ajudam e facilita na hora de fazer coisa que na mão seria um pouco demorado.
                </Card.Text>
                <Button variant="primary">Baixar</Button>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

function App() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button
        onClick={() => setModalShow(true)}
        className="trash__icon__button"
        variant="outline-light"
      >
        <FontAwesomeIcon icon={faBoxOpen} />
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
        <App />
      </div>
      <div className="Container__info"></div>
    </div>
  );
};

export default Documents;
