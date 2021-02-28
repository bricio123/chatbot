import React from "react";
import "./Services.css";
import { Link } from "react-router-dom";
import BotPatricia from "../BotPatricia/BotPatricia";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";
import {
  Dropdown,
  Button,
  ButtonGroup,
  SplitButton,
  DropdownButton,
} from "react-bootstrap";

const Services = () => {
  function option() {}
  return (
    <>
      <div className="Services__container">
        <div className="nav-top">
          <span>Serviços</span>
          <DropdownButton
          className='button-option'
            menuAlign="right"
            id="dropdown-menu-align-right"
          >
            <Dropdown.Item eventKey="1">Action</Dropdown.Item>
            <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
            <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
          </DropdownButton>
        </div>
      </div>
    </>
  );
};

export default Services;
