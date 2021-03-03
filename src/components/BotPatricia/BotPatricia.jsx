import React from "react";
import Patricia from "../../assets/botOne.png";
import "../BotPatricia/BotPatricia.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const BotAvatar = () => {
  return (
    <div>
      <section className="patricia__container">
        <Link to='/Dashboard'>
          <img className="patricia" src={Patricia} />
        </Link>
      </section>
    </div>
  );
};

export default BotAvatar;
