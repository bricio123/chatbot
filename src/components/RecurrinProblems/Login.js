import React from "react";
import { Button, Popover, OverlayTrigger } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const popover = (
  <Popover id="popover-basic">
    <Popover.Title as="h3">Login</Popover.Title>
    <Popover.Content>
      <p>
        Se o login de alguém não estiver funcionando, temos arquivos chamado BR2
        que está nos aquivos aqui mesmo na parte de arquivos, baixe olhe onde
        está o login de quem você precisa e tente logar, caso nao funcione entre
        em contato com alguem que consiga cadastrar esse usuário.
      </p>
    </Popover.Content>
  </Popover>
);

const Login = () => (
  <OverlayTrigger trigger="click" placement="right" overlay={popover}>
    <Button variant="success">
      <FontAwesomeIcon icon={faUser} />
    </Button>
  </OverlayTrigger>
);
export default Login;
