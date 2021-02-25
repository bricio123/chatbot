import React from "react";
import Patricia from "../../assets/botOne.png";
import "../BotPatricia/BotPatricia.css";
import { motion } from "framer-motion";

const BotAvatar = () => {

  return (
    
    <div>
      <section className="patricia__container">
        <img className='patricia' src={Patricia}/>
      </section>
    </div>
  );
};

export default BotAvatar;
