import React from "react";
import "../Action/Action.css";
import { Link } from "react-bootstrap";
import dialer from "../../../assets/logodialer.webp";

const Links = () => {
  return (
    <div className="Link_container">
      <a href="https://cb9.td.commpeak.com/auth/login?redirect=/" target='black'>
        <img src={dialer} />
      </a>
    </div>
  );
};
export default Links;
