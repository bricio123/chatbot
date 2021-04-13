import React from "react";
import { Button, Popover, OverlayTrigger } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const popover = (
  <Popover id="popover-basic">
    <Popover.Title as="h3">Popover right</Popover.Title>
    <Popover.Content>
      And here's some <strong>amazing</strong> content. It's very engaging.
      right?
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
