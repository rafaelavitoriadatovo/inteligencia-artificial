const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual é a principal causa da extinção de insetos?",
        alternativas: [
            {
                texto: "Mudanças climáticas",
                afirmacao: "Promover práticas agrícolas sustentáveis:Reduzir o uso de pesticidas e adotar métodos de controle de pragas mais naturais. "
            },
            {
                texto: "Perda de habitat",
                afirmacao: "Conservar habitats naturais: Proteger e restaurar habitats essenciais para a sobrevivência dos insetos.."
            }
        ]
    },
    {
        enunciado: "Como a extinção de insetos pode afetar a polinização?",
        alternativas: [
            {
                texto: "Redução na produção de alimentos.",
                afirmacao: "Criar zonas de proteção para polinizadores :Áreas onde o uso de pesticidas é restrito ou proibido para proteger os polinizadores naturais.."
            },
            {
                texto: "Aumento na diversidade de plantas.",
                afirmacao: "Plantar flora nativa e flores amigáveis aos polinizadores:Incentivar a plantação de plantas que fornecem néctar e pólen para polinizadores."
            }
        ]
    },
    {
        enunciado: "Qual o impacto da extinção de insetos nos ecossistemas aquáticos?",
        alternativas: [
            {
                texto: "Diminuição da diversidade de peixes  .",
                afirmacao: "Redução da poluição de águas: Diminuir a poluição agrícola e industrial para proteger os habitats aquáticos dos insetos.."
            },
            {
                texto: "Aumento da população de aves .",
                afirmacao: "2. Monitoramento e pesquisa contínua:Estudar os efeitos da extinção de insetos em ecossistemas aquáticos para entender melhor as interdependências."
            }
        ]
    },
    {
       

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

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();