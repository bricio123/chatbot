class ActionProvider {
  constructor(createChatBotMessage, setStateFunc, createClientMessage) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }

  //função que responde com uma imagem com o link do dialer
  handleMessageLinkDialer = () => {
    const messages = this.createChatBotMessage("Aqui está o link do Dialer.", {
      widget: "LinkDialer",
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

  //mantando os processos
  handleMessageKillProcess = () => {
    const messages = this.createChatBotMessage(
      "Quando temos esses problemas, nos encerramos o processo do site ou aplicativo em questão",
      {
        widget: "killProcess",
        withAvatar: true,
      }
    );

    this.addMessageToBotState(messages);
  };

  handleMessageLatencia = () => {
    const messages = this.createChatBotMessage(
      "Caso a conexão com a internet não esteja funcionando, você pode checar o cabo de rede ou o ponto de acesso. ",
      {
        widget: "latencia",
        withAvatar: true,
      }
    );

    this.addMessageToBotState(messages);
  };

  handleMessageHeadseat = () => {
    const messages = this.createChatBotMessage(
      "Se o audio e o microfone não estiverem funcionando, veja as configuraçãos a seguir:",
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
      "Todas as senhas estão devidamente cadastradas no basetech, caso não esteja, verifique no documento br2 que está dentro dos arquivos.",
      {
        widget: "basetech",
        withAvatar: true,
      }
    );

    this.addMessageToBotState(messages);
  };
    
//------------------------------------------------------------------------------------------------------------------
  //Comentei o raspbery pois essa parte vai ficar pronta apenas para a próxima versão!

  /*handleMessageRaspberry = () => {
    const messages = this.createChatBotMessage(
      "Todas as informações sobre o raspberry estarão disponíveis aqui:",
      {
        widget: "raspberry",
        withAvatar: true,
      }
    );

    this.addMessageToBotState(messages);
  };*/
 //-------------------------------------------------------------------------------------------------------------------   
  handleMessageLinkPontomais = () => {
    const messages = this.createChatBotMessage(
      "Aqui está o link do Pontomais.",
      {
        widget: "pontomais",
        withAvatar: true,
      }
    );

    this.addMessageToBotState(messages);
  };


  handleMessageVPN = () => {
    const messages = this.createChatBotMessage(
      "Caso tenha algum problema com a VPN informe ao grupo do basetech.",
      {
        widget: "vpn",
        withAvatar: true,
      }
    );

    this.addMessageToBotState(messages);
  };

  handleMessageBasetech = () => {
    const messages = this.createChatBotMessage(
      "Aqui está o link do Basetech.",
      {
        widget: "basetech",
        withAvatar: true,
      }
    );

    this.addMessageToBotState(messages);
  };




}

export default ActionProvider;
