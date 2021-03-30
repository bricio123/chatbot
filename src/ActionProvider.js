class ActionProvider {
  constructor(createChatBotMessage, setStateFunc, createClientMessage) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }

  //função que responde com uma imagem com o link do dialer
  handleMessageLinks = () => {
    const messages = this.createChatBotMessage("Aqui estão os links importantes ", {
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
      "Caso a conexão com algum site não esteja boa, você pode checar o link da latência!",
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

    
  handleMessagePassaword = () => {
    const messages = this.createChatBotMessage(
      "Todas as senhas estão devidamente cadastradas no basetech, caso não esteja, verifique no arquivo br2 que está dentro dos documentos.",
      {
        widget: "basetech",
        withAvatar: true,
      }
    );

    this.addMessageToBotState(messages);
  };
    
  handleMessageRaspberry = () => {
    const messages = this.createChatBotMessage(
      "Todas as informações sobre o raspberry estarão disponíveis aqui:",
      {
        widget: "raspberry",
        withAvatar: true,
      }
    );

    this.addMessageToBotState(messages);
  };
    





}

export default ActionProvider;
