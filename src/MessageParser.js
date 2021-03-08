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
      lowerCase.includes("dialer nao funciona") ||
      lowerCase.includes("dialer nao carrega") ||
      lowerCase.includes("dialer não entra ") ||
      lowerCase.includes("caixa adicional do dialer nao aparece") ||
      lowerCase.includes("caixa adicional do dialer não conecta  ") ||
      lowerCase.includes("nao conecta chamada ") ||
      lowerCase.includes("nao entra na chamada  ") ||
      lowerCase.includes("não recebo chamadas") ||
      lowerCase.includes("não escuto barulho de chamadas  ")
    ) {
      return this.actionProvider.handleMessageDialerDontWork();
    }

    if (
      lowerCase.includes("nao conecta chamada") ||
      lowerCase.includes("nao entra na chamada") ||
      lowerCase.includes("não recebo chamadas") ||
      lowerCase.includes("não escuto barulho de chamadas") ||
      lowerCase.includes("não escuto chamar") ||
      lowerCase.includes("dialer não liga") ||
      lowerCase.includes("dialer não deixa fazer call back")
    ) {
      return this.actionProvider.handleMessageDialerLatencia();
    }

    if (lowerCase.includes("dialer")) {
      return this.actionProvider.handleMessageLinks();
    }
    return this.actionProvider.handleDefault();
  };
}

export default MessageParser;
