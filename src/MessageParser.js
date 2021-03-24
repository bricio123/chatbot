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
   
//rlacionado a apresentação
    if (
      lowerCase.includes("ola") || 
      lowerCase.includes("tudo bem") ||
      lowerCase.includes("preciso de ajuda") ||
      lowerCase.includes("nao sei com fazer")||
      lowerCase.includes("estou com duvida")||
      lowerCase.includes("como fazer")||
      lowerCase.includes("Boa tarde")||
      lowerCase.includes("Boa noite")||
      lowerCase.includes("bom dia")||
      lowerCase.includes("oiii")||
      lowerCase.includes("oii")||
      lowerCase.includes("ooi")||
      lowerCase.includes("oi")
    ) {
      return this.actionProvider.handleMessageParser();
    }
//relacionado ao dialer
    if (
      lowerCase.includes("dialer nao funciona") ||
      lowerCase.includes("dialer nao carrega") ||
      lowerCase.includes("dialer não entra") ||
      lowerCase.includes("caixa adicional do dialer nao aparece")||
      lowerCase.includes("caixa adicional do dialer nao conecta")||
      lowerCase.includes("nao entra na chamada")||
      lowerCase.includes("nao receb78-000000e chamadas")||
      lowerCase.includes("dialer nao chama")
    ) {
      return this.actionProvider.handleMessageDialerDontWork();
    }
    //relacionado as senhas
    if (
      lowerCase.includes("nao sei a senha") ||
      lowerCase.includes("senhas") ||
      lowerCase.includes("senha") ||
      lowerCase.includes("minhas senhas") ||
      lowerCase.includes("sem acesso as senhas") ||
      lowerCase.includes("preciso da minha senha") ||
      lowerCase.includes("nao sei a senha do dialer") ||
      lowerCase.includes("eu nao tenho a senha do gwu") ||
      lowerCase.includes("preciso do link do basetech") ||
      lowerCase.includes("o que e basetech") ||
      lowerCase.includes("chat de conversa da empresa") ||
      lowerCase.includes("preciso do basetech") ||
      lowerCase.includes("senhas") ||
      lowerCase.includes("chat") ||
      lowerCase.includes("onde estao as senhas")
    ) {
      return this.actionProvider.handleMessagePassaword()
    }
  
    //relacionado ao fone
    if (
      lowerCase.includes("fone") ||
      lowerCase.includes("headseat")||
      lowerCase.includes("fone de ouvido")||
      lowerCase.includes("ouvido")||
      lowerCase.includes("fone nao ")||
      lowerCase.includes("meu fone esta com mal contato")||
      lowerCase.includes("nao escuto nada")||
      lowerCase.includes("a chamada nao atende")||
      lowerCase.includes("minha caixa adicional do nao fumciona")||
      lowerCase.includes("nao consigo ligar")||
      lowerCase.includes("nao ouço chamar")||
      lowerCase.includes("nao consigo ouvir")||
      lowerCase.includes("a pessoa nao me escuta")||
      lowerCase.includes("eu nao consigo ligar")||
      lowerCase.includes("o microfone parou de funcionar")||
      lowerCase.includes("eu nao consigo completar chamada")||
      lowerCase.includes("sem interface de fone")||
      lowerCase.includes("sem fone")||
      lowerCase.includes("eu nao tenho adaptador de fone")||
      lowerCase.includes("nao funciona o fone de oduvio")
     ) {
      return this.actionProvider.handleMessageHeadseat();
    }

    //relacionado a latencia
    if (
      lowerCase.includes("voz do agente demora na hora de falar com o cliente") ||
      lowerCase.includes("teste") ||
      lowerCase.includes("cliente nao consegue ouvir")
     
     ) {
      return this.actionProvider.handleMessageLatencia();
    }
    //relacionado ao dialer
    if (
      lowerCase.includes("dialer") ||
      lowerCase.includes("onde fica o dialer") ||
      lowerCase.includes("como acessar o dialer")
    ) {
      return this.actionProvider.handleMessageLinks();
    }
    return this.actionProvider.handleDefault();
  }

}



export default MessageParser;
