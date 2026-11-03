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
    alternativas: [
      {
        afirmacao: "A) Internet Avançada", texto: "B) Inteligêngia Artificial"],
  },
  {
    enunciado: "Qual das seguintes alternativas é um exemplo de IA generativa capaz de criar textos e responder a comandos?",
    alternativas: [
      {
        afirmacao: "A) ChatGPT", texto: "B) Google Drive"],
  },
   {
    enunciado: "Muitas pessoas usam IA no celular sem notar. Qual destas funções comuns usa Inteligência Artificial para facilitar o dia a dia?",
    alternativas: [
      {
        afirmacao: "A) O corretor ortográfico que prevê a próxima palavra que você vai digitar", texto: "B) O alarme do relógio que toca de manhã"],
  },
   {
    enunciado: "No cinema, qual destes personagens famosos é uma Inteligência Artificial que controla uma armadura de super-herói?",
    alternativas: [
      {
        texto: "A) R2-D2 (de Star Wars)", afirmacao: "B) A) J.A.R.V.I.S. (do Homem de Ferro)"],
  },
   {
    enunciado: 0"Grandes plataformas usam IA para descobrir o que você gosta. Qual destes serviços usa algoritmos para recomendar sua próxima música ou filme?",
    alternativas: [
      {
        texto: "A) Calculadora do celular", afirmacao: "B) Netflix e Spotify"],
  },
];

let atual = 0;
let perguntaAtual;
let hitoriaFinal = "";

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

function mostraResultado() {
  caixaPerguntas.textContent = "E assim...";
  textoResultado.textContent = "Parabéns por concluir o nosso quiz! 🤖✨ A Inteligência Artificial já deixou de ser uma promessa do futuro ou uma exclusividade das telas de cinema para se tornar parte fundamental da nossa rotina. Como vimos ao longo das perguntas, ela atende pela sigla de Inteligência Artificial e se manifesta de formas que muitas vezes nem percebemos. Seja quando o corretor ortográfico do seu celular prevê a sua próxima palavra, quando plataformas como a Netflix e o Spotify escolhem a trilha sonora ou o filme perfeito para o seu descanso, ou quando você interage com tecnologias generativas inovadoras como o ChatGPT para criar textos e tirar dúvidas em segundos. E embora ainda não tenhamos uma armadura voadora controlada pelo J.A.R.V.I.S. à nossa disposição, as ferramentas reais de IA já transformam a nossa produtividade e o nosso lazer todos os dias. O objetivo deste quiz foi mostrar que a IA não é um bicho de sete cabeças, mas sim uma tecnologia feita para somar e facilitar a nossa vida. Continue explorando, testando esses novos recursos e usando a tecnologia a seu favor!\n\nAté a próxima descoberta tecnológica! 👋🚀";
  caixaAlternativas.textContent = "";
}

let historiaFinal = "";
function respostaSelecionada(opcaoSelecionada) {
  const afirmacao = opcaoSelecionada.afirmacao;
  historiaFinal += afirmacao + " ";
  atual++;
  mostraPergunta();
}
