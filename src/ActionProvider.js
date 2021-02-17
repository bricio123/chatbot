class ActionProvider {
  // The action provider receives createChatBotMessage which you can use to define the bots response, and
  // the setState function that allows for manipulating the bots internal state.
  constructor(createChatBotMessage, setStateFunc, createClientMessage) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }

  handleMessageParser = () => {
    const messages = this.createChatBotMessage("Ola",{
      widget: "overview",     
      withAvatar: true,
    });

    this.addMessageToBotState(messages);
  };
  handleMessageMask = () => {
    const messages = this.createChatBotMessage("Não tem mascara?",{
      widget: "mask",
      withAvatar: false,
    });

    this.addMessageToBotState(messages);
  };

  handleDefault = () => {
    const message = this.createChatBotMessage("Como eu posso te ajudar?", {
      withAvatar: false,
    });

    this.addMessageToBotState(message);
  };

  addMessageToBotState = (messages) => {
    if (Array.isArray(messages)) {
      this.setState((state) => ({
        ...state,
        messages: [...state.messages, ...messages],
      }));
    } else {
      this.setState((state) => ({
        ...state,
        messages: [...state.messages, messages],
      }));
    }
  };
}

export default ActionProvider;
