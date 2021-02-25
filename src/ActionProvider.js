class ActionProvider {
  constructor(createChatBotMessage, setStateFunc, createClientMessage) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }
  handleMessageLinks = () => {
    const messages = this.createChatBotMessage("Aqui esta o link do dialer", {
      widget: "Links",
      withAvatar: true,
    });
    this.addMessageToBotState(messages);
  }
  handleMessageParser = () => {
    const messages = this.createChatBotMessage("Olá, qual é sua duvida?", {
      widget: "presentation",
      withAvatar: true,
    });

    this.addMessageToBotState(messages);
  };
  handleMessageSheet = () => {
    const messages = this.createChatBotMessage("temos uma planilha com o usuario e senha de todos", {
      widget: "loginList",
      withAvatar: true,
    });

    this.addMessageToBotState(messages);
  };

  handleDefault = () => {
    const message = this.createChatBotMessage("Não entendi", {
      withAvatar: true,
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
