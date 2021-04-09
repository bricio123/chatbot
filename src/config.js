import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import Presention from "./components/Answer/presentation/presentation";
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider";
import ClickClean from "./components/Answer/ClickClean/ClickClean";
import LoginList from "./components/Answer/LoginList/LoginList";
import LinkDialer from "./components/Answer/Action/Action";
import KillProcess from "./components/Answer/KillProcess/KillProcess";
import Basetech from "./components/Answer/Basetech/Basetech";
import Raspberry from "./components/Answer/Raspberry/Raspberry";
import Pontomais from "./components/Answer/Pontomais/Pontomais";
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
      backgroundColor: "var(--link)",
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
      widgetName: "clickclean",
      widgetFunc: (props) => <ClickClean {...props} />,
      mapStateToProps: ["gist"],
    },
    {
      widgetName: "killProcess",
      widgetFunc: (props) => <KillProcess {...props} />,
      mapStateToProps: ["gist"],
    },
    {
      widgetName: "latencia",
      widgetFunc: (props) => <></>,
      mapStateToProps: ["gist"],
    },
    {
      widgetName: "LinkDialer",
      widgetFunc: (props) => <LinkDialer {...props} />,
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
      widgetName: "basetech",
      widgetFunc: (props) => <Basetech {...props} />,
      mapStateToProps: ["gist"],
    },
    {
      widgetName: "raspberry",
      widgetFunc: (props) => <Raspberry {...props} />,
      mapStateToProps: ["gist"],
    },
    {
      widgetName: "pontomais",
      widgetFunc: (props) => <Pontomais {...props} />,
      mapStateToProps: ["gist"],
    },
    {
      widgetName: "headseat",
      widgetFunc: (props) => <Headseat {...props} />,
      mapStateToProps: ["gist"],
    },
    {
      widgetName: "basetech",
      widgetFunc: (props) => <Basetech {...props} />,
      mapStateToProps: ["gist"],
    },
  ],
};

export default config;
