import React from "react";
import "./Services.css";
import { Link } from "react-router-dom";
import BotPatricia from "../BotPatricia/BotPatricia";
import chatbotImg from "../../assets/chatbot.svg";
import raspbarry from "../../assets/raspberry.svg";
import RecurrenProblems from "../../components/RecurrinProblems/RecurrinProblems";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCogs,
  faHammer,
  faBug,
  faEyeDropper,
  faSignature,
} from "@fortawesome/free-solid-svg-icons";

import { DropdownButton } from "react-bootstrap";

const Services = () => {
  return (
    <>
      <div className="Services__container">
        <div className="nav-top">
          <span>Serviços</span>
          <DropdownButton
            className="button-option outline"
            menuAlign="right"
            id="dropdown-menu-align-right"
          >
            <div className="options">
              <div className="options__select">
                <p>Configuração</p>

                <FontAwesomeIcon icon={faCogs} />
              </div>

              <div eventKey="2" className="options__select">
                <p>Moldar um bot</p>

                <FontAwesomeIcon icon={faHammer} />
              </div>
              <div eventKey="3" className="options__select">
                <p>Reportar Bugs</p>

                <FontAwesomeIcon icon={faBug} />
              </div>

              <div eventKey="4" className="options__select">
                <p>Alterar nome</p>

                <FontAwesomeIcon icon={faSignature} />
              </div>

              <div eventKey="4" className="options__select">
                <p>Alterar cor</p>

                <FontAwesomeIcon icon={faEyeDropper} />
              </div>
            </div>
          </DropdownButton>
        </div>
        <div className="now-bots">
          <img src={chatbotImg} />
          <p>
            Conheça nossos bot's, cada um tem um proposito, conhece-los vai te
            ajudar a selecionar o mais eficaz para te ajudar na sua tarefa!
          </p>
          <Link to="/Meetbot">
            <button className="button__go__now">Conhecer bots</button>
          </Link>
        </div>
        <RecurrenProblems />
      </div>
    </>
  );
};

export default Services;
