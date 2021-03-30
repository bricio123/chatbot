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
      lowerCase.includes("caixa adicional do dialer nao aparece") ||
      lowerCase.includes("caixa adicional do dialer nao conecta") ||
      lowerCase.includes("nao entra na chamada") ||
      lowerCase.includes("nao recebe chamadas") ||
      lowerCase.includes("dialer travou") ||
      lowerCase.includes("dialer nao conecta") ||
      lowerCase.includes("nao conecta corretamente") ||
      lowerCase.includes("nao conecta corretamente") ||
      lowerCase.includes("agent nao recebe chamadas") ||
      lowerCase.includes("agent nao consegue ouvir as ligações") ||
      lowerCase.includes("agent nao consgue ligar no dialer") ||
      lowerCase.includes("agent nao consegue ligar") ||
      lowerCase.includes("agent nao consegue completar chamada") ||
      lowerCase.includes("nao recebe ligações") ||
      lowerCase.includes("nao recebe chamadas") ||
      lowerCase.includes("dialer do agent esta fora") ||
      lowerCase.includes("dialer do agent nao funciona") ||
      lowerCase.includes("dialer nao chama")
    ) {
      return this.actionProvider.handleMessageDialerDontWork();
    }

    //------------------------------------------------------------------------

    //relacionado ao raspberry
    if (
      lowerCase.includes("rasp") ||
      lowerCase.includes("raspberry com problema") ||
      lowerCase.includes("raspberry nao funciona") ||
      lowerCase.includes("raspberry nao esta ligando") ||
      lowerCase.includes("imagem de raspberry") ||
      lowerCase.includes("raspberry com defeito") ||
      lowerCase.includes("raspberry sem internet") ||
      lowerCase.includes("raspberry esta funcionando") ||
      lowerCase.includes("problema de resolução noraspberry") ||
      lowerCase.includes("problema de configuração no raspberry") ||
      lowerCase.includes("rasp com problema") ||
      lowerCase.includes("preciso das configurações do raspberry") ||
      lowerCase.includes("raspberry esta dando muito problema") ||
      lowerCase.includes("raspberry") ||
      lowerCase.includes("berry")
    ) {
      return this.actionProvider.handleMessageRaspberry();
    }

    //relacionado as senhas
    if (
      lowerCase.includes("nao sei a senha") ||
      lowerCase.includes("senhas") ||
      lowerCase.includes("senha") ||
      lowerCase.includes("minhas senhas") ||
      lowerCase.includes("minha senha") ||
      lowerCase.includes("sem acesso as senhas") ||
      lowerCase.includes("preciso da minha senha") ||
      lowerCase.includes("nao sei a senha do dialer") ||
      lowerCase.includes("eu nao tenho a senha do gwu") ||
      lowerCase.includes("preciso do link do basetech") ||
      lowerCase.includes("o que e basetech") ||
      lowerCase.includes("chat de conversa da empresa") ||
      lowerCase.includes("senhas") ||
      lowerCase.includes("sem senha do dialer") ||
      lowerCase.includes("sem senha do gwu") ||
      lowerCase.includes("sem senha do skype") ||
      lowerCase.includes("sem senha do basetech") ||
      lowerCase.includes("sem senha do ") ||
      lowerCase.includes("sem as minhass senhas") ||
      lowerCase.includes("sem as senhas do agent") ||
      lowerCase.includes("sem senhas") ||
      lowerCase.includes("o basetech do agent está sem senha") ||
      lowerCase.includes("o basetech do agent está sem as senhas") ||
      lowerCase.includes("o agent está sem as senhas") ||
      lowerCase.includes("o agent está sem as senhas dele") ||
      lowerCase.includes("nao consigo entrar no KYC do agent") ||
      lowerCase.includes("nao consigo entrar no GWU do agent") ||
      lowerCase.includes("nao consigo entrar no Dialer do agent") ||
      lowerCase.includes("nao consigo entrar no basetech do agent") ||
      lowerCase.includes("nao consigo acessar o kyc do agent") ||
      lowerCase.includes("nao consigo acessar o dialer agent") ||
      lowerCase.includes("nao acessar o gwu do agent") ||
      lowerCase.includes("nao consigo acessar o slack do agent") ||
      lowerCase.includes("nao consigo acessa o skype do senior") ||
      lowerCase.includes("nao consigo acessar as senhas do senior") ||
      lowerCase.includes("nao consigo acessar a senha do senior") ||
      lowerCase.includes("nao consigo acessar o slack") ||
      lowerCase.includes("nao consigo acessar o gwu") ||
      lowerCase.includes("nao consigo entrar em uma conta") ||
      lowerCase.includes("nao consigo achar a senha") ||
      lowerCase.includes("nao consigo encontrar as senhas dos usuarios") ||
      lowerCase.includes("nao consigo encontrar a senha do agent") ||
      lowerCase.includes("nao consigo encontrar as senhas de usuario") ||
      lowerCase.includes("nao consigo encontrar as senhas") ||
      lowerCase.includes("nao consigo fazer login no dialer") ||
      lowerCase.includes("nao consigo fazer login no gwu") ||
      lowerCase.includes("nao consigo fazer login no slack") ||
      lowerCase.includes("nao consigo fazer login no basetech") ||
      lowerCase.includes("nao consigo fazer login no skype") ||
      lowerCase.includes("entrar no login dos usuarios") ||
      lowerCase.includes("entrar no login dos agents") ||
      lowerCase.includes("entrar no kcy do agent") ||
      lowerCase.includes("entrar no dialer do agent") ||
      lowerCase.includes("entrar no gwu do agent") ||
      lowerCase.includes("entrar com usuario do agent") ||
      lowerCase.includes("entrar com a senha do agent") ||
      lowerCase.includes("onde estão as senhas dos agents") ||
      lowerCase.includes("onde esta o gwu do agent") ||
      lowerCase.includes("onde esta a senha do gwu do agent") ||
      lowerCase.includes("onde esta a senha do dialer do agent") ||
      lowerCase.includes("onde estao as senhas dos agents") ||
      lowerCase.includes("onde esta a senha do kyc dos agents") ||
      lowerCase.includes("onde esta a senha do kyc do agent") ||
      lowerCase.includes("onde estao as senhas") ||
      lowerCase.includes("onde estao as credenciais") ||
      lowerCase.includes("credenciais dos agents") ||
      lowerCase.includes("onde esta o arquivo de senhas") ||
      lowerCase.includes("arquivo de senhas") ||
      lowerCase.includes("senhas dos agents") ||
      lowerCase.includes("preciso das senhas dos agents") ||
      lowerCase.includes("preciso da senha do agent") ||
      lowerCase.includes("preciso das senhas") ||
      lowerCase.includes("credenciais") ||
      lowerCase.includes("preciso das credenciais") ||
      lowerCase.includes("lista de senhas dos agents") ||
      lowerCase.includes("chat") ||
      lowerCase.includes("onde estao as senhas")
    ) {
      return this.actionProvider.handleMessagePassaword();
    }

    //relacionado ao fone
    if (
      lowerCase.includes("fone") ||
      lowerCase.includes("sem som") ||
      lowerCase.includes("headseat") ||
      lowerCase.includes("fone de ouvido") ||
      lowerCase.includes("ouvido") ||
      lowerCase.includes("fone nao ") ||
      lowerCase.includes("meu fone esta com mal contato") ||
      lowerCase.includes("nao escuto nada") ||
      lowerCase.includes("a chamada nao atende") ||
      lowerCase.includes("minha caixa adicional do nao fumciona") ||
      lowerCase.includes("nao consigo ligar") ||
      lowerCase.includes("nao ouço chamar") ||
      lowerCase.includes("nao consigo ouvir") ||
      lowerCase.includes("a pessoa nao me escuta") ||
      lowerCase.includes("eu nao consigo ligar") ||
      lowerCase.includes("o microfone parou de funcionar") ||
      lowerCase.includes("eu nao consigo completar chamada") ||
      lowerCase.includes("sem interface de fone") ||
      lowerCase.includes("sem som na chamada") ||
      lowerCase.includes("sem som na ligação") ||
      lowerCase.includes("sem som no microfone") ||
      lowerCase.includes("chamada sem som") ||
      lowerCase.includes("chamada com som ruim") ||
      lowerCase.includes("nao tem som na ligação") ||
      lowerCase.includes("nao tem som na chamada do dialer") ||
      lowerCase.includes("sem som no dialer") ||
      lowerCase.includes("chamada de som nao funciona") ||
      lowerCase.includes("chamada de som nao entra") ||
      lowerCase.includes("chamada do agent sem som") ||
      lowerCase.includes("chama e nao conecta") ||
      lowerCase.includes("dialer chama e nao conecta") ||
      lowerCase.includes("sem som no fone") ||
      lowerCase.includes("fone nao conecta") ||
      lowerCase.includes("ligação sem som") ||
      lowerCase.includes("ligação nao funciona") ||
      lowerCase.includes("agent sem som") ||
      lowerCase.includes("agent esta dizendo que a chamada nao conecta") ||
      lowerCase.includes("agent esta reclamando do fone") ||
      lowerCase.includes("sem fone") ||
      lowerCase.includes("ligação nao funciona") ||
      lowerCase.includes("ligação nao entra") ||
      lowerCase.includes("chamada nao conecta") ||
      lowerCase.includes("chamada do agent com problema") ||
      lowerCase.includes("dialer nao consegue completar a chamada") ||
      lowerCase.includes("dialer nao consegue conectar a chamada") ||
      lowerCase.includes("agent nao consegue completar a chamada") ||
      lowerCase.includes("chamada com som estranho") ||
      lowerCase.includes("chamada nao esta conectando") ||
      lowerCase.includes("chamada do agent nao conecta corretamente") ||
      lowerCase.includes("chamada") ||
      lowerCase.includes("chamada do agent") ||
      lowerCase.includes("ligação") ||
      lowerCase.includes("ligação do agent") ||
      lowerCase.includes("problema de ligação") ||
      lowerCase.includes("problema de som") ||
      lowerCase.includes("dialer com problema de ligação") ||
      lowerCase.includes("problema na chamada") ||
      lowerCase.includes("dialer com problema na chamada") ||
      lowerCase.includes("dialer nao conecta chamada") ||
      lowerCase.includes("agent nao consegue completar a ligação") ||
      lowerCase.includes("ligação no dialer") ||
      lowerCase.includes("delay na ligação do dialer") ||
      lowerCase.includes("ligação travou") ||
      lowerCase.includes("fone de ouvido nao esta conectando") ||
      lowerCase.includes("fone do agent nao conecta") ||
      lowerCase.includes("ligação do agent sem som") ||
      lowerCase.includes("a ligação do agent esta com problemas") ||
      lowerCase.includes("o agent esta com problemas na chamada") ||
      lowerCase.includes("ligação no dialer com problema") ||
      lowerCase.includes("fone do agent nao funciona como deveria") ||
      lowerCase.includes("ligação do agent nao funciona da maneira correta") ||
      lowerCase.includes("eu nao tenho adaptador de fone") ||
      lowerCase.includes("nao funciona o fone de oduvio")
    ) {
      return this.actionProvider.handleMessageHeadseat();
    }

    //relacionado a latencia
    if (
      lowerCase.includes(
        "voz do agente demora na hora de falar com o cliente"
      ) ||
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
    //relacionado llinks
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
  };
}

export default MessageParser;
