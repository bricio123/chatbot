import React from "react";
import { Button, Popover, OverlayTrigger } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNetworkWired } from "@fortawesome/free-solid-svg-icons";

const popover = (
  <Popover id="popover-basic">
    <Popover.Title as="h3">Internet</Popover.Title>
    <Popover.Content>
      Caso fique sem Internet siga o<strong>passo a passo </strong> Se não der certo, verifique a latencia.
    </Popover.Content>
  </Popover>
);

const RaspBerry = () => (
  <OverlayTrigger trigger="click" placement="right" overlay={popover}>
    <Button variant="success">
      <FontAwesomeIcon icon={faNetworkWired} />
    </Button>
  </OverlayTrigger>
);
export default RaspBerry;
