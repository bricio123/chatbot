import React from "react";
import "./Meetboots.css";
import Meetbot from '../../../assets/meetbot.svg';
import {faTachometerAlt, faHourglass, faHandPeace, faRobot} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
export default function Meetboots() {
  return (
    <div className="bots_container">
      <div className='hero__container'>
          <div className='hero__copy'>
            <h1>
              Conheça cada um dos nossos bots!
            </h1>
            <p>
              Bom, sabemos que nosso tempo é corrido então nós da Basetech criamos bots para solucionar perda de tempo e de informação, criando bots inteligentes, que vai te auxiliar nas dúvidas recorrentes de problemas.
            </p>
          </div>
          <div className='img__meetbot'>
            <img src={Meetbot}/>
          </div>
      </div>
      <div className='list__options'>
          <ul className='options__icons'>
            <li><FontAwesomeIcon icon={faTachometerAlt}/></li>
            <li><FontAwesomeIcon icon={faHourglass}/></li>
            <li><FontAwesomeIcon icon={faHandPeace}/></li>
            <li><FontAwesomeIcon icon={faRobot}/></li>
          </ul>
      </div>
      <div className='paralax'>
        
      </div>


    </div>
  );
}
