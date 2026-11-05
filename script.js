const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [ 
    { 
        enunciado: "Você acorda no ano de 2040 e percebe que sua casa está totalmente automatizada por uma Inteligência Artificial. Qual é a sua primeira reação com essa nova rotina?", 
        alternativas: [ 
            { texto: "A) Fico empolgado e decido explorar todas as ferramentas de IA para facilitar o meu dia.", afirmacao: "Você começou sua jornada entusiasmado com o potencial da tecnologia, integrando ferramentas inteligentes na sua rotina diária." }, 
            { texto: "B) Fico desconfiado e prefiro desativar os recursos automáticos para manter o controle manual.", afirmacao: "No início, você adotou uma postura cautelosa, preferindo a segurança do controle manual e o questionamento sobre a privacidade." } 
        ], 
    }, 
    { 
        enunciado: "Na escola ou no trabalho, você precisa entregar um projeto complexo até o fim do dia. Como decide utilizar as IAs generativas disponíveis?", 
        alternativas: [ 
            { texto: "A) Uso ferramentas como o ChatGPT para criar a base do texto, otimizar dados e acelerar a produção.", afirmacao: "Diante dos desafios, você usou sistemas generativos para impulsionar sua produtividade e economizar tempo." }, 
            { texto: "B) Prefiro fazer tudo sozinho e uso a IA apenas no final para revisar a gramática e corrigir erros.", afirmacao: "Valorizando a criação puramente humana, você usou algoritmos apenas como um suporte técnico de revisão." } 
        ], 
    }, 
    { 
        enunciado: "No tempo livre, você percebe que os algoritmos de recomendação do Spotify e da Netflix conhecem seus gostos perfeitamente. O que você faz?", 
        alternativas: [ 
            { texto: "A) Sigo as sugestões da tela, confiando no sistema para descobrir novas músicas e filmes.", afirmacao: "Na hora do lazer, permitiu que os algoritmos de recomendação expandissem seus horizontes culturais." }, 
            { texto: "B) Ignoro a lista automática e busco indicações diretamente com amigos e criadores independentes.", afirmacao: "Nas pausas, preferiu a curadoria humana e o boca a boca, evitando ficar preso em uma bolha de algoritmos." } 
        ], 
    }, 
    { 
        enunciado: "Em uma feira de tecnologia, você vê uma armadura inteligente com um assistente virtual integrado (estilo J.A.R.V.I.S.). Qual o seu pensamento sobre o futuro da robótica?", 
        alternativas: [ 
            { texto: "A) Acho incrível! Acredito que robôs e humanos vão trabalhar juntos para resolver grandes problemas.", afirmacao: "Sua visão de futuro é optimista, enxergando robôs avançados como parceiros fundamentais da humanidade." }, 
            { texto: "B) Fico preocupado com a segurança e o impacto que esses assistentes autônomos podem causar.", afirmacao: "Seu olhar sobre o futuro traz uma preocupação ética importante sobre os limites e a segurança da automação extrema." } 
        ], 
    }, 
    { 
        enunciado: "No fim das contas, você precisa definir o papel da Inteligência Artificial no mundo. Qual caminho você defende?", 
        alternativas: [ 
            { texto: "A) Defendo o avanço rápido da IA, pois ela é a chave para a evolução da medicina, ciência e educação.", afirmacao: "Por fim, você escolheu apoiar a aceleração tecnológica como o motor principal do progresso científico." }, 
            { texto: "B) Defendo regras rígidas e limites claros para que a IA nunca substitua a criatividade e os empregos humanos.", afirmacao: "Por fim, você decidiu levantar a bandeira da regulamentação, priorizando o bem-estar social e a essência humana." } 
        ], 
    }, 
]; 

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
  if (atual >= perguntas.length) {
    mostraResultado();
    return;
  }
  perguntaAtual = perguntas[atual];
  caixaPerguntas.textContent = perguntaAtual.enunciado;
  caixaAlternativas.textContent = "";
  mostraAlternativas();
}

function mostraAlternativas() {
  for (const alternativa of perguntaAtual.alternativas) {
    const botaoAlternativa = document.createElement("button");
    botaoAlternativa.textContent = alternativa.texto;
    botaoAlternativa.addEventListener("click", () => respostaSelecionada(alternativa));
    caixaAlternativas.appendChild(botaoAlternativa);
  }
}

function respostaSelecionada(opcaoSelecionada) {
  const afirmacao = opcaoSelecionada.afirmacao;
  historiaFinal += afirmacao + " ";
  atual++;
  mostraPergunta();
}

function mostraResultado() { 
    caixaPerguntas.textContent = "O veredito da sua jornada..."; 
    textoResultado.textContent = historiaFinal + "\n\nConclusão: Seja você um entusiasta do progresso digital ou um defensor cauteloso da privacidade, a Inteligência Artificial veio para redesenhar o nosso cotidiano. Longe de ser apenas ficção de cinema ou um bicho de sete cabeças, ela se manifesta de formas sutis no nosso dia a dia. O futuro não é sobre a tecnologia substituir o ser humano, mas sim sobre como escolhemos usar essa inteligência para somar e expandir nossas capacidades. Continue explorando esse novo mundo com criticidade!\n\nParabéns por concluir a sua história! 🤖🚀"; 
    caixaAlternativas.textContent = ""; 
}

mostraPergunta();
