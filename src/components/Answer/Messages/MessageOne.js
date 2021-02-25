import React from "react";
import "../Messages/MessageOne.css";
import { ButtonGroup, Button} from "react-bootstrap";
export default function MessageOne() {
  return (
    <div className="Container_all">
      <p>Onde é seu ambiente de trabalho</p>
      <ButtonGroup className="button-list">
        <Button className="button-select">Academy spanish</Button>
        <Button className="button-select">Academy backoffice</Button>
        <Button className="button-select">Academy 7 andar</Button>
        <Button className="button-select">TecnoTowers</Button>
      </ButtonGroup>
    </div>
  );
}
