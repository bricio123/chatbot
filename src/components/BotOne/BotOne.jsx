import React from "react";
import Botone from "../../assets/botOne.png";
import "../BotOne/BotOne.css";
import { Chatbot } from "react-chatbot-kit";
import MessageParser from "../../MessageParser";
import ActionProvider from "../../ActionProvider";
import config from "../../config";

const BotOne = () => {
  return (
    <>
      <div className="chat__container">
        <Chatbot
          className="chat"
          config={config}
          actionProvider={ActionProvider}
          messageParser={MessageParser}
        />
      </div>
    </>
  );
};

export default BotOne;
