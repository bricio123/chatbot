/* eslint-disable jsx-a11y/alt-text */
import React, { useRef, useState } from "react";
import "./ClickClean.css";
import FirstImg from "../../../assets/cleaner-open.png";
import SecondImg from "../../../assets/cleaner-menu.png";
import { Accordion, Card } from "react-bootstrap";
import thirdimagem from "../../../assets/Sclick.png";

const Headseat = () => {
  return (
    <div className="click__container">

<Accordion defaultActiveKey="0">
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="0">
      Primera etapa
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="0">
      <Card.Body>
      <div className='desc__one'>
        <img src={FirstImg} />
        <h2>Abra as configurações de clicar e limpar</h2>
        <p>
          Abra o menu suspenso Click & Clean clicando no botão Click & Clean <span>1</span> à
          direita da barra de ferramentas do Chrome.
        </p>
        <p>
          No menu suspenso, clique em qualquer botão denominado "Opções" <span>2</span> Não
          clique em nenhum botão antes de definir as configurações de acordo com
          sua necessidade.
        </p>
      </div></Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="1">
     Segunda etapa
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="1">
      <Card.Body>
      <div className='desc__two'>
        <img src={SecondImg} />
        <h2>Limpeza </h2>
        <p>
          Depois de ajustar as configurações, você pode iniciar o processo de
          limpeza clicando no botão "Executar Limpeza"  ou clicando no botão
          "Limpar Dados Privados"<span>1 </span>localizado no menu Clicar e Limpar. Isso
          apagará todos os dados de navegação de acordo com as configurações que
          você especificou .
        </p>

        <p>
          Além disso, você pode apagar rapidamente apenas alguns dados de
          navegação, como histórico de navegação, histórico de download, cookies
          e cache <span>2</span>
        </p>

      
      </div></Card.Body>
    </Accordion.Collapse>
  </Card>

  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="2">
     Terceira etapa
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="2">
      <Card.Body>
      <div className='desc__tre'>
        <img src={thirdimagem} />
        <h1>Habilitar todas as opções</h1>
        <p>
          Depois de ajustar as configurações, você pode habilitar todas as opções para iniciar o processo de
          limpeza clicando no botão "Executar Limpeza".  Dessa forma as senhas serão apagadas assim como todas
          informções dos usuários! 
          Essa configuração apagará todos os dados de navegação de acordo com as configurações que
          você especificou.
        </p>
     </div></Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>


    </div>
  );
};
export default Headseat;
