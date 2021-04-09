import React from "react";
import "../Action/Action.css";
import { Link } from "react-bootstrap";
import dialer from "../../../assets/logodialer.webp";

const LinkDialer = () => {
  return (
    <div className="Link_container">
      
        <li>
          <a href="https://cb9.td.commpeak.com/auth/login?redirect=/" target='black'>
            <img src={dialer} />
          </a>

        </li>
</div>
  );
};
export default LinkDialer;
