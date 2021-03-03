class ActionProvider {
  constructor(createChatBotMessage, setStateFunc, createClientMessage) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }

  //função que responde com uma imagem com o link do dialer
  handleMessageLinks = () => {
    const messages = this.createChatBotMessage("Aqui esta o link do dialer", {
      widget: "Links",
      withAvatar: true,
    });
    this.addMessageToBotState(messages);
  };

  //função que se apreseta e da uma previa de erros recorrentes
  handleMessageParser = () => {
    const messages = this.createChatBotMessage("Olá, qual é sua duvida?", {
      widget: "presentation",
      withAvatar: true,
    });

    this.addMessageToBotState(messages);
  };
  //função que
  handleMessageFiles = () => {
    const messages = this.createChatBotMessage(
      "Saiba que temos uma seção com os aquivos mais utilizado por nós click e baixe a planilha com os logins",
      {
        withAvatar: true,
      }
    );

    this.addMessageToBotState(messages);
  };

  handleMessageHeadseat = () => {
    const messages = this.createChatBotMessage(
      "Se o audio e o microfone não estiverem funcionando, veja as configuraçãos a seguir",
      {
        widget: "Headseat",
        withAvatar: true,
      }
    );

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
