import React from "react";
import { Modal, Button, Card, Carousel } from "react-bootstrap";
import "../Documents/Documents.css";
import imgCode from "../../assets/img-code.jpeg";
import imgPlanilha from "../../assets/img-planilha.jpg";
import imgIp from "../../assets/img-ip.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import favorits from "../../assets/favoritos.jpg";
import Dialer from "../../assets/logodialer.webp";
import Basetech from "../../assets/basetech/logobasetech.jpeg";
import PontoMais from "../../assets/pontomais/Ponto.jpg";
import NewsFeature from '../../assets/novas.svg';
import {
  faBoxOpen
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
            <Card>
              <Card.Img variant="top" src={imgPlanilha} />
              <Card.Body>
                <Card.Title>Login dos agentes</Card.Title>
                <Card.Text>
                  As vezes na hora de logar pode ser que não dê certo, então
                  temos os logins e senhas de cada um para você verificar se
                  está tudo certo
                </Card.Text>
                <Button variant="primary">Baixar</Button>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card>
              <Card.Img variant="top" src={imgCode} />
              <Card.Body>
                <Card.Title>Script</Card.Title>
                <Card.Text>
                  Uma mão amiga, os nossos scripts te ajudam e facilita na hora
                  de fazer coisa que na mão seria um pouco demorado.
                </Card.Text>
                <Button variant="primary">Baixar</Button>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={favorits} />
              <Card.Body>
                <Card.Title>Favoritos</Card.Title>
                <Card.Text>
                  Aqui você pode importar os favoritos para da área de trabalho
                  para o seu navegador.
                </Card.Text>
                <Button variant="primary">Baixar</Button>
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
  //--------------------basetech-----------------
  const titleBasetech = "Basetech";
  const textCardBase = "Acesse ao basetech para saber mais sobre ele.";
  //---------------------------------------------

  //--------------------dialer-------------------
  const titleDialer = "Dialer";
  const textCardDial =
    "Dialer é uma plataforma de voip que nós usamos para fazer ligações";
  //---------------------------------------------

  //-------------------ponto mais----------------
  const titlePontoMais = "Ponto Mais";
  const textCardPont =
    "Ponto mais será onde você vai registrar suas entradas e saídas ";
  //---------------------------------------------

  return (
    <div className="Documents_container">
      <div className="Documentes__itens__save">
        <span>Arquivos</span>
        <App />
      </div>
      <div className="Container__info">
        <Carousel>
          <Carousel.Item>
            <section className="texts__title">
              <Card>
                <Card.Img variant="top" src={Basetech} />
                <Card.Body>
                  <Card.Title>{titleBasetech}</Card.Title>
                  <Card.Text>
                    <p>{textCardBase}</p>
                  </Card.Text>
                  <Button variant="secondary">Conheçer</Button>
                </Card.Body>
              </Card>
            </section>
          </Carousel.Item>
          <Carousel.Item>
            <section className="texts__title">
              <Card>
                <Card.Img variant="top" src={favorits} />
                <Card.Body>
                  <Card.Title>{titleDialer}</Card.Title>
                  <Card.Text>
                    <p>{textCardDial}</p>
                  </Card.Text>
                  <Button variant="secondary">Conheçer</Button>
                </Card.Body>
              </Card>
            </section>
          </Carousel.Item>
          <Carousel.Item>
            <section className="texts__title">
              <Card>
                <Card.Img variant="top" src={PontoMais} />
                <Card.Body>
                  <Card.Title>{titlePontoMais}</Card.Title>
                  <Card.Text>
                    <p>{textCardPont}</p>
                  </Card.Text>
                  <Button variant="secondary">Conheçer</Button>
                </Card.Body>
              </Card>
            </section>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="what__is__news">
        <img src={NewsFeature}/>
        <h4>Novas feature em breve</h4>
      </div>
    </div>
  );
};

export default Documents;
