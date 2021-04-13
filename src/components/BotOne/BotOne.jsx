import React from "react";
import Botone from "../../assets/botOne.png";
import "../BotOne/BotOne.css";
import { Chatbot } from "react-chatbot-kit";
import MessageParser from "../../MessageParser";
import ActionProvider from "../../ActionProvider";
import config from "../../config";

import Documents from "../../components/Documents/Documents";
import Services from "../../components/Services/Services";
import ChatbotList from "../../components/ChatbotList/ChatbotList";

const BotOne = () => {
  return (
    <>
      <div className="chat__container">
        <Chatbot
          className="chat"
          config={config}
          actionProvider={ActionProvider}
          messageParser={MessageParser}
          placeholderText={"Escreva sua mensagem aqui!"}
        />
     
      </div>
    </>
  );
};

export default BotOne;
