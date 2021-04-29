import React from "react";
import { Button, Popover, OverlayTrigger } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadphonesAlt } from "@fortawesome/free-solid-svg-icons";

const popover = (
  <Popover id="popover-basic">
    <Popover.Title as="h3">Fone de ouvido</Popover.Title>
    <Popover.Content>
      Caso o fone de ouvido pare de funcionar, realize o teste de microfone <strong>Mic Test</strong> Se o teste mostrar que o equipamente está funcionando, verifique a configuração.
    </Popover.Content>
  </Popover>
);

const Headseat = () => (
  <OverlayTrigger trigger="click" placement="right" overlay={popover}>
    <Button variant="success">
      <FontAwesomeIcon icon={faHeadphonesAlt} />
    </Button>
  </OverlayTrigger>
);
export default Headseat;
