import React from "react";
import { Button, Popover, OverlayTrigger } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const popover = (
  <Popover id="popover-basic">
    <Popover.Title as="h3">Dialer</Popover.Title>
    <Popover.Content>
      Caso a chamada do Dialer continue com problema após o <strong>passo a passo de limpeza, </strong> 
      vefirique a ossibilidade de haver problema na linha do cliente, ou se pode haver problemas no servidor do Dialer, causando instabilidade. 
    </Popover.Content>
  </Popover>
);

const Login = () => (
  <OverlayTrigger trigger="click" placement="right" overlay={popover}>
    <Button variant="success">
      <FontAwesomeIcon icon={faPhone} />
    </Button>
  </OverlayTrigger>
);
export default Login;
