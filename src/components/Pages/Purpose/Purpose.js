import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Button } from "react-bootstrap";
import NavbarAll from "../../Navbar/Navbar";
import Patricia from "../../BotPatricia/BotPatricia";
import "./Purpose.css";
import Quality from "../../../assets/quality.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faHandPeace,
  faBookReader,
  faDatabase,
} from "@fortawesome/free-solid-svg-icons";

const Purpose = () => {
  return (
    <div className="bots_container">
      <NavbarAll />
      <div className="container__purpose">
        <section>
          <h2>O que esperar de nós?</h2>
          <p>
            Temos a missão de fazer com que você tenha a resposta que quiser na
            palma da sua mão, com a melhor precisão possível, faça um teste,
            difina a sua dúvida e relacione ao bote que irá lhe atender melhor
          </p>
          <h5>Qualidades</h5>
        </section>
        <div className="show-options">
          <div className="show-options_one">
            <FontAwesomeIcon icon={faClock} size="2x" className="time" />
            <div className="texts">
              <strong>Tempo</strong>
              <p>
                Tempo é dinheiro e com os chat reduzimos o tempo de outros
                funcionários e o seu!
              </p>
            </div>
          </div>
          <div className="show-options_two">
            <FontAwesomeIcon icon={faHandPeace} size="2x" className="time" />
            <div className="texts">
              <strong>Facilidade</strong>
              <p>
                È so selecionar o Bot que vá satisfazer á sua pergunta e pronto
                começe a perguntar !
              </p>
            </div>
          </div>
          <div className="show-options_two">
            <FontAwesomeIcon icon={faBookReader} size="2x" className="time" />
            <div className="texts">
              <strong>Didático</strong>
              <p>
                Criamos com carinho, e pesando em como facilitar para você, tudo
                na ponta do lápis
              </p>
            </div>
          </div>
          <div className="show-options_two">
            <FontAwesomeIcon icon={faDatabase} size="2x" className="time" />
            <div className="texts">
              <strong>Informações</strong>
              <p>
                Todas as informaçoes que usamos aqui dia, e todos os dados que
                você poderá usar!
              </p>
            </div>
          </div>
        </div>

        <div className="quality_description">
          <div className='img__description'>
            <img src={Quality} />
          </div>
          <div className="quality_description_text">
            <p>askdhaksdjghaksdjhaskdjhaskj</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Purpose;
