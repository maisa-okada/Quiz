const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const pergunta1 = "O que significa a sigla IA no contexto da tecnologia?";
const pergunta2 = "Qual das seguintes alternativas é um exemplo de IA generativa capaz de criar textos e responder a comandos?";
const pergunta3 = "Muitas pessoas usam IA no celular sem notar. Qual destas funções comuns usa Inteligência Artificial para facilitar o dia a dia?";
const pergunta4 = "No cinema, qual destes personagens famosos é uma Inteligência Artificial que controla uma armadura de super-herói?";
const pergunta5 = "Grandes plataformas usam IA para descobrir o que você gosta. Qual destes serviços usa algoritmos para recomendar sua próxima música ou filme?";
const perguntas = [
  {
    enunciado: "O que significa a sigla IA no contexto da tecnologia?",
    alternativas: ["A) Internet Avançada", "B) Inteligêngia Artificial"],
  },
  {
    enunciado: "Qual das seguintes alternativas é um exemplo de IA generativa capaz de criar textos e responder a comandos?",
    alternativas: ["A) ChatGPT", "B) Google Drive"],
  },
   {
    enunciado: "Muitas pessoas usam IA no celular sem notar. Qual destas funções comuns usa Inteligência Artificial para facilitar o dia a dia?",
    alternativas: ["A) O corretor ortográfico que prevê a próxima palavra que você vai digitar", "B) O alarme do relógio que toca de manhã"],
  },
   {
    enunciado: "No cinema, qual destes personagens famosos é uma Inteligência Artificial que controla uma armadura de super-herói?",
    alternativas: ["A) J.A.R.V.I.S. (do Homem de Ferro)", "B) R2-D2 (de Star Wars)"],
  },
   {
    enunciado: 0"Grandes plataformas usam IA para descobrir o que você gosta. Qual destes serviços usa algoritmos para recomendar sua próxima música ou filme?",
    alternativas: ["A) Calculadora do celular", "B) Netflix e Spotify"],
  },
];

let atual = 0;
let perguntaAtual;
let hitoriaFinal = "";

function mostraPergunta() {
  perguntaAtual = perguntas[atual];
  caixaPerguntas.textContent = perguntaAtual.enunciado;
  mostraAlternativas();
}

function mostraAlternativas() {
  for (const alternativa of perguntaAtual.alternativas) {
    const botaoAlternativa = document.createElement("button");
    botaoAlternativa.textContent = alternativa.texto;
    botaoAlternativa.addEventListener("click", () => respostaSelecionada(opcao));{
      atual++;
      mostraPergunta();
    })
    caixaAlternativas.appendChild(botaoAlternativas);
  }
}

function respostaSelecionada(opcaoSelecionada) {
  const afirmacoes = opcaoSelecionada.afirmacoes;
  historiaFinal += afirmacoes + " ";
  atual++;
  mostraPergunta();
}
mostraPergunta();

