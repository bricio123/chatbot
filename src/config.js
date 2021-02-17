import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import Overview from "./components/Messages/MessageOne";
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider";
import Mask from './components/Answer/Mask/Mask';

const botName = "Patricia";

const config = {
  botName: botName,
  lang: "PT",
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#5ccc9d",
    },
  },
  initialMessages: [
    createChatBotMessage(`Ola me chamo ${botName}, Tire suas dúvidas sobre como fazer um atendimento seguro `, {
      withAvatar: true,
      delay: 500,
      widget: "overview",
    }),
  ],
  state: {
    gist: "",
  },
  customComponents: {},
  widgets: [
    {
      widgetName: "overview",
      widgetFunc: (props) => <Overview {...props} />,
      mapStateToProps: ["gist"],
    },
    {
      widgetName: "mask",
      widgetFunc: (props) => <Mask {...props} />,
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
  ],
};

export default config;
