import React from "react";
import "./Services.css";
import { Link } from "react-router-dom";
import BotPatricia from "../BotPatricia/BotPatricia";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCogs, faHammer, faBug, faEyeDropper } from "@fortawesome/free-solid-svg-icons";
import {
  Dropdown,
  Button,
  ButtonGroup,
  SplitButton,
  DropdownButton,
} from "react-bootstrap";

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
              <divder />
              <div eventKey="4"  className="options__select">
                <p>Alterar cor</p>

                <FontAwesomeIcon icon={faEyeDropper} />
              </div>
            </div>
          </DropdownButton>
        </div>
      </div>
    </>
  );
};

export default Services;
