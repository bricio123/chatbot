import React, { useState } from "react";
import "./App.css";
import { Chatbot } from "react-chatbot-kit";

import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider";
import config from "./config";

import {} from "react-router-dom";
function App() {
  const [showBot, toggleBot] = useState(false);

  const saveMessages = (messages) => {
    localStorage.setItem("chat_messages", JSON.stringify(messages));
  };

  const loadMessages = () => {
    const messages = JSON.parse(localStorage.getItem("chat_messages"));
    return messages;
  };
  return (
    <div className="App-header">
      <Chatbot
        className="chat"
        config={config}
        actionProvider={ActionProvider}
        messageParser={MessageParser}
      />
    </div>
  );
}

export default App;
