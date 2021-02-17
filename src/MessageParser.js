class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse = (message) => {
    const lowerCase = message.toLowerCase();
    if (
      lowerCase.includes("mascara") ||
      lowerCase.includes("Estou sem mascara") ||
      lowerCase.includes("Não tenho mascara") ||
      lowerCase.includes("Onde eu posso pegar uma mascara")
    ) {
      return this.actionProvider.handleMessageMask();
    }
    return this.actionProvider.handleDefault();
  };
}

export default MessageParser;
