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
      lowerCase.includes("problema no dialer") ||
      lowerCase.includes("problema com o dialer") ||
      lowerCase.includes("dialer não responde") ||
      lowerCase.includes("dialer com problema") ||
      lowerCase.includes("dialer nao responde") ||
      lowerCase.includes("dialer nao deixa chamar") ||
      lowerCase.includes("dialer nao esta funcionando corretamente") ||
      lowerCase.includes("dialer nao esta respondendo como deveria") ||
      lowerCase.includes("problema na hora de discar") ||
      lowerCase.includes("problema para fazer ligação no dialer") ||
      lowerCase.includes("problema para ligar") ||
      lowerCase.includes("dialer nao esta conectando a chamada") ||
      lowerCase.includes("dialer nao abre caixa adicional") ||
      lowerCase.includes("dialer nao esta funcionando") ||
      lowerCase.includes("dialer nao esta entrando") ||
      lowerCase.includes("dialer nao conecta") ||
      lowerCase.includes("dialer nao liga") ||
      lowerCase.includes("dialer nao aceita chamadas") ||
      lowerCase.includes("agent nao consegue utilizar o dialer") ||
      lowerCase.includes("agent nao consegue ligar") ||
      lowerCase.includes("agent com problema para usar o dialer") ||
      lowerCase.includes("agent com leads ruins no dialer") ||
      lowerCase.includes("agent nao consegue completar ligação") ||
      lowerCase.includes("dialer do agent com problema") ||
      lowerCase.includes("nao consegue dialer") ||
      lowerCase.includes("dialer est fora") ||
      lowerCase.includes("dialer nao entra") ||
      lowerCase.includes("agent nao consegue usar o dialer") ||
      lowerCase.includes("agent nao consegue retornar chamadas") ||
      lowerCase.includes("dialer nao aceita retornar chamadas") ||
      lowerCase.includes("nao estou conseguindo usar o dialer") ||
      lowerCase.includes("problema nas chamadas") ||
      lowerCase.includes("problema para abrir o dialer") ||
      lowerCase.includes("dialer nao esta funcionando") ||
      lowerCase.includes("agent nao esta conseguindo ligar") ||
      lowerCase.includes("problema no callback") ||
      lowerCase.includes("dialer com problema de callback") ||
      lowerCase.includes("caixa adicional do dialer nao aparece")||
      lowerCase.includes("caixa adicional do dialer nao conecta")||
      lowerCase.includes("nao entra na chamada")||
      lowerCase.includes("nao recebe chamadas")||
      lowerCase.includes("dialer nao chama")
    ) {
      return this.actionProvider.handleMessageDialerDontWork();
    }



    




//------------------------------------------------------------------------



    
   


     //relacionado ao raspberry
    if (
      lowerCase.includes("rasp") ||
      lowerCase.includes("raspberry") ||
      lowerCase.includes("berry")
    ) {
      return this.actionProvider.handleMessageRaspberry()
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
      lowerCase.includes("sem senha do dialer") ||
      lowerCase.includes("sem senha do gwu") ||
      lowerCase.includes("sem senha do skype") ||
      lowerCase.includes("sem senha do basetech ") ||
      lowerCase.includes("sem senha do ") ||
      lowerCase.includes("sem senhas") ||
      lowerCase.includes("sem senhas") ||
      lowerCase.includes("sem senhas") ||
      lowerCase.includes("sem senha") ||
      lowerCase.includes("chat") ||
      lowerCase.includes("onde estao as senhas")
    ) {
      return this.actionProvider.handleMessagePassaword()
    }
  
    //relacionado ao fone
    if (
      lowerCase.includes("fone") ||
      lowerCase.includes("sem som") ||
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
      lowerCase.includes("sem internet") ||
      lowerCase.includes("sem acesso a internet") ||
      lowerCase.includes("internet esta muito ruim") ||
      lowerCase.includes("internet") ||
      lowerCase.includes("sem conexao") ||
      lowerCase.includes("pontomais nao funciona") ||
      lowerCase.includes("ponto nao funciona") ||
      lowerCase.includes("nao tem conexao") ||
      lowerCase.includes("sem acesso") ||
      lowerCase.includes("sem conexao com a internet") ||
      lowerCase.includes("nao carrega pagina")
     
     ) {
      return this.actionProvider.handleMessageLatencia();
    }
    //relacionado ao dialer
    if (
      lowerCase.includes("dialer") ||
      lowerCase.includes("onde fica o dialer") ||
      lowerCase.includes("links importantes") ||
      lowerCase.includes("links da ti") ||
      lowerCase.includes("preciso dos links") ||
      lowerCase.includes("preciso do basetech") ||
      lowerCase.includes("preciso do ponto") ||
      lowerCase.includes("preciso do dialer") ||
      lowerCase.includes("preciso dos links internos") ||
      lowerCase.includes("basetech") ||
      lowerCase.includes("preciso entrar no dialer") ||
      lowerCase.includes("preciso registrar o ponto") ||
      lowerCase.includes("preciso das senhas") ||
      lowerCase.includes("preciso do chat") ||
      lowerCase.includes("senhas") ||
      lowerCase.includes("senha") ||
      lowerCase.includes("abrir o dialer") ||
      lowerCase.includes("abrir basetech") ||
      lowerCase.includes("link do basetech") ||
      lowerCase.includes("link do dialer") ||
      lowerCase.includes("pontomais") ||
      lowerCase.includes("commpeak dialer") ||
      lowerCase.includes("commpeak") ||
      lowerCase.includes("links") ||
      lowerCase.includes("ponto") ||
      lowerCase.includes("link do ponto")
    ) {
      return this.actionProvider.handleMessageLinks();
    }
    return this.actionProvider.handleDefault();
  }

}



export default MessageParser;
