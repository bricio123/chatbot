import React from "react";
import "./Meetboots.css";
import Meetbot from '../../../assets/meetbot.svg';

export default function Meetboots() {
  return (
    <div className="bots_container">
      <div className='hero__container'>
          <div className='hero__copy'>
            <h1>
              Conheça cada um dos nosso bots!
            </h1>
            <p>
              Bom sabemos que nosso tempo e corrido então nós da Basetech criamos bots para solucionar perca de tempo e de informação criando bots inteligentes, que vai te auxiliar nas dúvidas recorrentes de problemas.
            </p>
          </div>
          <div className='img__meetbot'>
            <img src={Meetbot}/>
          </div>
      </div>
    </div>
  );
}
