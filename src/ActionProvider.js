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
  //dialer
  handleMessageDialerDontWork = () => {
    const messages = this.createChatBotMessage(
      "Nessa situação usamos o Click Clean, para limpar o cache do navegador, aqui está o passo a passo.",
      {
        widget: "clickclean",
        withAvatar: true,
      }
    );

    this.addMessageToBotState(messages);
  };

  handleMessageLatencia = () => {
    const messages = this.createChatBotMessage(
      "Dialer nao não entra pode ser ocasionado quando a latência da internet está muito alta ou quando o navegador está desatualizado (atualize com o Menu.sh) que esta no arquivos.",
      {
        widget: "latencia",
        withAvatar: true,
      }
    );

    this.addMessageToBotState(messages);
  };


  handleMessageHeadseat = () => {
    const messages = this.createChatBotMessage(
      "Se o audio e o microfone não estiverem funcionando, veja as configuraçãos a seguir",
      {
        widget: "headseat",
        withAvatar: true,
      }
    );

    this.addMessageToBotState(messages);
  };

  handleDefault = () => {
    const messages = this.createChatBotMessage("Não entendi", {
      withAvatar: true,
    });

    this.addMessageToBotState(messages);
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
