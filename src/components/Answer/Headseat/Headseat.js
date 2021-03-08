import React, { useRef, useState } from "react";
import "./Headseat.css";
import { Button, Popover, OverlayTrigger } from "react-bootstrap";

const popover = (
  <Popover id="popover-basic">
    <Popover.Title as="h3">Verificação</Popover.Title>
    <Popover.Content>
      <ul className="list_fone">
        <li>1 - No canto superior a direita temos um auto falante</li>
        <li>2 - Clicando nele, abrirá uma outra aba, click em saída</li>
        <li>3 - Temos dois tipos de interface "audio adapter e filetron</li>
        <li>
          4 - Escolha uma das duas caso esteja na seleção clicando na bolinha
        </li>
        <p>Pronto, faca o teste novamente</p>
      </ul>
    </Popover.Content>
  </Popover>
);
const box = (
  <Popover id="popover-basic">
    <Popover.Title as="h3">Cliente</Popover.Title>
    <Popover.Content>
      <ul className="list_fone">
        <li>1 - Se o cliente nao esculta podemos verificar o dialer</li>
        <li>2 - Caso o navegador esteja com o cache cheio limpe-o</li>
        <li>2 - Use o Click clean</li>
        <li>2 - feche o navegador</li>
      </ul>
    </Popover.Content>
  </Popover>
);

const Headseat = () => {
  return (
    <div className="list_container">
      <p>Configuração no respberry</p>
      <div className="grid">
        <OverlayTrigger trigger="click" placement="top" overlay={popover}>
          <Button className="box" variant="success">
            Microfone ou audio{" "}
          </Button>
        </OverlayTrigger>

        <OverlayTrigger trigger="click" placement="bottom" overlay={box}>
          <Button className="box" variant="success">
            Cliente não esculta
          </Button>
        </OverlayTrigger>
      </div>
    </div>
  );
};
export default Headseat;
