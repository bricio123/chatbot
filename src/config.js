import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import Presention from "./components/Answer/presentation/presentation";
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider";
import LoginList from "./components/Answer/LoginList/LoginList";
import Links from "./components/Answer/Action/Action";
import Headseat from "./components/Answer/Headseat/Headseat";
import "./GlobalStyles.css";
const botName = "Patricia";

const config = {
  botName: botName,
  lang: "PT",
  customStyles: {
    botMessageBox: {
      backgroundColor: "var(--link)",
    },
    chatButton: {
      backgroundColor: "#0ea700",
    },
  },
  initialMessages: [
    createChatBotMessage(
      `Prazer, meu desenvolvedor está me aperfeiçoando, sou a primeira versão, então  tenha paciência se eu não enteder algumas frases,fale em poucas palavras a sua dúvida`
    ),
  ],
  state: {
    gist: "",
  },
  customComponents: {},
  widgets: [
    {
      widgetName: "Links",
      widgetFunc: (props) => <Links {...props} />,
      mapStateToProps: ["gist"],
    },
    {
      widgetName: "presentation",
      widgetFunc: (props) => <Presention {...props} />,
      mapStateToProps: ["gist"],
    },
    {
      widgetName: "loginList",
      widgetFunc: (props) => <LoginList {...props} />,
      mapStateToProps: ["gist"],
    },
    {
      widgetName: "messageParser",
      widgetFunc: (props) => <MessageParser {...props} />,
      mapStateToProps: ["gist"],
    },
    {
      widgetName: "actionProvider",
      widgetFunc: (props) => <ActionProvider {...props} />,
      mapStateToProps: ["gist"],
    },
    {
      widgetName: "Headseat",
      widgetFunc: (props) => <Headseat {...props} />,
      mapStateToProps: ["gist"],
    },
  ],
};

export default config;
