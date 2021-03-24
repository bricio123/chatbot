import React from "react";
import "../Basetech/Basetech.css";
import { Link } from "react-bootstrap";
import dialer from "../../../assets/logodialer.webp";
import Basetech from "../../../assets/basetech/logobasetech.jpeg";

const Links = () => {
  return (
    <div className="basetech_container">
     <a href="https://192.168.240.250" target="blank">

       <img src={Basetech} />
     </a>
    </div>
  );
};
export default Links;
