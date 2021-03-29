import React from "react";
import "../Action/Action.css";
import { Link } from "react-bootstrap";
import dialer from "../../../assets/logodialer.webp";
import Basetech from "../../../assets/basetech/logobs.png";
import Pontomais from "../../../assets/pontomais/pontomais.png";

const Links = () => {
  return (
    <div className="Link_container">
      <ul className="lista">
        <li>
          <a href="https://cb9.td.commpeak.com/auth/login?redirect=/" target='black'>
            <img src={dialer} />
          </a>

        </li>
        <li>

          <a href="https://192.168.240.250" target="blank">

            <img src={Basetech} className="basetech" />
          </a>
        </li>

          


        <li>

          <a href="https://app.pontomaisweb.com.br/#/acessar" target="blank">

            <img src={Pontomais} />
          </a>
        </li>




      </ul>


    </div>
  );
};
export default Links;
