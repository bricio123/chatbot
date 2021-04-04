class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    // State represents the chatbot state and is passed
    // in at initalization. You can use it to read chatbot state
    // inside the messageParser
    this.state = state;
  }

  parse = (message) => {
    const lowerCase = message.toLowerCase();

    if (
      lowerCase.includes("skype parou") ||
      lowerCase.includes("google parou") ||
      lowerCase.includes("aplicativo parou") ||
      lowerCase.includes("aplicativo esta carregando e nao entra") ||
      lowerCase.includes("any desk parou") ||
      lowerCase.includes("travou") ||
      lowerCase.includes("skype") ||
      lowerCase.includes("google") ||
      lowerCase.includes("chromium") ||
      lowerCase.includes("skype travou") ||
      lowerCase.includes("google travou") ||
      lowerCase.includes("chromium travou")
    ) {
      return this.actionProvider.handleMessageKillProcess();
    }
    if (
      lowerCase.includes("ola") ||
      lowerCase.includes("tudo bem") ||
      lowerCase.includes("preciso de ajuda") ||
      lowerCase.includes("nao sei com fazer") ||
      lowerCase.includes("estou com duvida") ||
      lowerCase.includes("como fazer") ||
      lowerCase.includes("Boa tarde") ||
      lowerCase.includes("Boa noite") ||
      lowerCase.includes("bom dia") ||
      lowerCase.includes("oi")
    ) {
      return this.actionProvider.handleMessageParser();
    }

    if (
      lowerCase.includes("dialer nao funciona") ||
      lowerCase.includes("dialer nao carrega") ||
      lowerCase.includes("dialer não entra") ||
      lowerCase.includes("caixa adicional do dialer nao aparece") ||
      lowerCase.includes("caixa adicional do dialer nao conecta") ||
      lowerCase.includes("nao entra na chamada") ||
      lowerCase.includes("nao recebe chamadas") ||
      lowerCase.includes("dialer nao chama") ||
      lowerCase.includes("dialer esta fora do ar") ||
      lowerCase.includes("eu nao acesso nada")
    ) {
      return this.actionProvider.handleMessageDialerDontWork();
    }
    if (
      lowerCase.includes("fone") ||
      lowerCase.includes("headseat") ||
      lowerCase.includes("fone de ouvido") ||
      lowerCase.includes("ouvido") ||
      lowerCase.includes("fone nao ") ||
      lowerCase.includes("como configurar o fone no raspberry") ||
      lowerCase.includes("como configurar o fone no ntc") ||
      lowerCase.includes("nao funciona o fone de ouvido")
    ) {
      return this.actionProvider.handleMessageHeadseat();
    }
    if (
      lowerCase.includes(
        "voz do agente demora na hora de falar com o cliente"
      ) ||
      lowerCase.includes("voz demora") ||
      lowerCase.includes("voz") ||
      lowerCase.includes("dialer demora") ||
      lowerCase.includes("dialer com lentidao") ||
      lowerCase.includes("clientes nao escuta agente") ||
      lowerCase.includes("cliente nao consegue ouvir")
    ) {
      return this.actionProvider.handleMessageLatencia();
    }

    if (
      lowerCase.includes("dialer") ||
      lowerCase.includes("onde fica o dialer") ||
      lowerCase.includes("como acessar o dialer")
    ) {
      return this.actionProvider.handleMessageLinks();
    }
    return this.actionProvider.handleDefault();
  };
}

export default MessageParser;
