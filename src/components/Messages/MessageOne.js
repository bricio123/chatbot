import React from "react";
import "../Messages/MessageOne.css";

export default function MessageOne() {
  return (
    <div className="Container_all">
      <p>Informaçoes de como proceder no atendimento</p>
      <ul className="list">
        <li>
          1 = Coloque suas luvas e  mascara, não retire-as durante o atendimento!
        </li>
        <li>
          2 = Apos isso peça ao agente, que lhe dê licenca da estação para que você possa concertar o computador!
        </li>
        <li>
         3 = Logo em seguida, limpe suas luvas com alcool e peça para que o mesmo faça isso com os os periféricos!
        </li>
        <li>
          4 = Não esqueça da luvas e máscara, sua proteção!  
        </li>
      </ul>
    </div>
  );
}
