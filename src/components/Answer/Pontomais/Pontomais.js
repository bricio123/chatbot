/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Pontomais from "../../../assets/pontomais/pontomais.png";




const LinkPontomais = () => {
    return (
      <div className="pontomais_container">
       <a href="https://app.pontomaisweb.com.br/#/acessar" target="blank">

           <img src={Pontomais} />
       </a>
      </div>
    );
  };
  export default LinkPontomais;
  