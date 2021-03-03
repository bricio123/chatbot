class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse = (message) => {
    const lowerCase = message.toLowerCase();

    if (
      lowerCase.includes("quero o link do dialer") ||
      lowerCase.includes("como acesso o dialer") ||
      lowerCase.includes("commpeak") ||
      lowerCase.includes("onde esta o dialer") ||
      lowerCase.includes("onde posso acessar o dialer") ||
      lowerCase.includes("acessar o dialer") ||
      lowerCase.includes("onde esta") ||
      lowerCase.includes("dialer")
    )
      return this.actionProvider.handleMessageLinks();

    //apresentação
    if (
      lowerCase.includes("ola") ||
      lowerCase.includes("oi") ||
      lowerCase.includes("tudo bem") ||
      lowerCase.includes("bem") ||
      lowerCase.includes("como vai") ||
      lowerCase.includes("como") ||
      lowerCase.includes("fala") ||
      lowerCase.includes("como voce esta") ||
      lowerCase.includes("vai") ||
      lowerCase.includes("tudo legal") ||
      lowerCase.includes("legal") ||
      lowerCase.includes("oie") ||
      lowerCase.includes("voce") ||
      lowerCase.includes("legal") ||
      lowerCase.includes("Estou com duvidas") ||
      lowerCase.includes("duvida") ||
      lowerCase.includes("como")
    )
      return this.actionProvider.handleMessageParser();
    if (
      lowerCase.includes("onde fica as senhas") ||
      lowerCase.includes("eu nao acho as senhas") ||
      lowerCase.includes("como eu faco login no dialer") ||
      lowerCase.includes("usuarios nao logam") ||
      lowerCase.includes("usuarios nao logam") ||
      lowerCase.includes("senhas") ||
      lowerCase.includes("login") ||
      lowerCase.includes("usuarios") ||
      lowerCase.includes("como o usuario loga no dialer") ||
      lowerCase.includes("onde eu consigo as senhas do dialer") ||
      lowerCase.includes("usuario sem login") ||
      lowerCase.includes("agente sem login no dialer") ||
      lowerCase.includes("me fale onde estao as senhas") ||
      lowerCase.includes("quero as senhas") ||
      lowerCase.includes("estou sem login") ||
      lowerCase.includes("login nao funciona") ||
      lowerCase.includes("como logar no dialer") ||
      lowerCase.includes(
        "eu nao sei como achar o login de um usuario no dialer"
      ) ||
      lowerCase.includes("logar") ||
      lowerCase.includes("listas") ||
      lowerCase.includes("nao sei como eu faço para logar") ||
      lowerCase.includes("onde fica o dialer") ||
      lowerCase.includes("quero logar no dialer") ||
      lowerCase.includes("como faço para logar no dialer") ||
      lowerCase.includes("o dialer nao loga") ||
      lowerCase.includes("onde está o dialer") ||
      lowerCase.includes("não sei como achar o dialer") ||
      lowerCase.includes("quero saber como acho o login no dialer") ||
      lowerCase.includes("quero saber como acho o login") ||
      lowerCase.includes("quero saber como acho as senhas do dialer") ||
      lowerCase.includes(" quero saber onde eu acho as senhas do dialer") ||
      lowerCase.includes("quero saber como acho as senhas do dialer")
    )
      return this.actionProvider.handleMessageFiles();
    if (
      lowerCase.includes("nao encontrei o nome do agente na planilha") ||
      lowerCase.includes("nao tem o nome do agente na planilha") ||
      lowerCase.includes("planilha como erra") ||
      lowerCase.includes("agente nao encontrado") ||
      lowerCase.includes("agente sem login") ||
      lowerCase.includes("nao tem o login") ||
      lowerCase.includes("login nao consta") ||
      lowerCase.includes("vai") ||
      lowerCase.includes("tudo legal") ||
      lowerCase.includes("legal") ||
      lowerCase.includes("oie") ||
      lowerCase.includes("voce") ||
      lowerCase.includes("legal") ||
      lowerCase.includes("como")
    ) {
      return this.actionProvider.createChatBotMessage();
    }
    if (
      lowerCase.includes("headseat") ||
      lowerCase.includes("fone") ||
      lowerCase.includes("configuracão do fone") ||
      lowerCase.includes("como arrumar o fone") ||
      lowerCase.includes("como concertar o fone") ||
      lowerCase.includes("quero configurar o fone") ||
      lowerCase.includes("onde fica a configuração dos headseat") ||
      lowerCase.includes("filetron") ||
      lowerCase.includes("headseat") ||
      lowerCase.includes("headseat") ||
      lowerCase.includes("headseat") ||
      lowerCase.includes("headseat")
    ) {
      return this.actionProvider.handleMessageHeadseat();
    }
    if (
      lowerCase.includes("login não esta correto") ||
      lowerCase.includes("nao consigo logar") ||
      lowerCase.includes("onde eu consigo os logins de cada um") ||
      lowerCase.includes("login") ||
      lowerCase.includes("quero logar ") ||
      lowerCase.includes("login não esta correto") ||
      lowerCase.includes("login não esta correto")
    ) {
      return this.actionProvider.handleMessageFiles();
    }
    return this.actionProvider.handleDefault();
  };
}

export default MessageParser;
