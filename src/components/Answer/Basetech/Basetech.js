
import React from "react";
import "../Basetech/Basetech.css";
import Basetech from "../../../assets/basetech/logobasetech.jpeg";

const Links = () => {
  return (
  
    <div className="basetech_container">
         <a href="https://192.168.240.250" target="blank">

         <img src={Basetech} alt='img'/>
        </a>
    </div>
    
  );
};
export default Links;
