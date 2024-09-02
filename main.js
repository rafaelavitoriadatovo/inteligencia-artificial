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
                afirmacao: *Promover práticas agrícolas sustentáveis*:A agricultura convencional utiliza frequentemente grandes quantidades de pesticidas e fertilizantes químicos que podem ser extremamente prejudiciais para os insetos. Esses produtos químicos não apenas eliminam pragas, mas também afetam negativamente insetos benéficos, como polinizadores e predadores naturais de pragas. Promover práticas agrícolas sustentáveis envolve a adoção de métodos de cultivo que minimizem o impacto no meio ambiente. Isso inclui a rotação de culturas, o uso de controle biológico de pragas (como predadores naturais e insetos benéficos), e a integração de técnicas de manejo de pragas que reduzem a necessidade de pesticidas químicos. Essas práticas ajudam a manter um equilíbrio ecológico, promovendo a biodiversidade e protegendo as populações de insetos. "
            },
            {
                texto: "Perda de habitat",
                afirmacao: *Conservar habitats naturais*:A perda de habitat é uma das principais ameaças à biodiversidade de insetos. Atividades humanas, como o desmatamento, a urbanização e a expansão agrícola, reduzem significativamente os habitats disponíveis para os insetos, fragmentando suas populações e limitando suas fontes de alimento e locais de reprodução. Para mitigar esse problema, é essencial conservar e restaurar habitats naturais. Isso pode ser feito através da criação de reservas naturais, da implementação de corredores ecológicos que conectam diferentes áreas protegidas, e da restauração de habitats degradados. Além disso, práticas como o plantio de árvores nativas e a proteção de áreas úmidas também são importantes para fornecer refúgios seguros e diversificados para os insetos, garantindo que eles tenham um ambiente adequado para prosperar."
            }
        ]
    },
    {
        enunciado: "Como a extinção de insetos pode afetar a polinização?",
        alternativas: [
            {
                texto: "Redução na produção de alimentos.",
                afirmacao: *Criar zonas de proteção para polinizadores*: Polinizadores como abelhas, borboletas, mariposas e outros insetos desempenham um papel crucial na polinização de muitas plantas, incluindo aquelas que produzem frutas, vegetais e outras culturas alimentares essenciais. Para proteger esses polinizadores, é vital estabelecer zonas de proteção onde o uso de pesticidas seja limitado ou proibido. Essas zonas de proteção, que podem ser áreas agrícolas, parques urbanos, ou até jardins particulares, servem como refúgios onde os polinizadores podem encontrar alimentos e reproduzir-se sem o risco de envenenamento por pesticidas. Além disso, a educação e a conscientização dos agricultores e do público sobre a importância dos polinizadores e sobre práticas agrícolas sustentáveis são fundamentais para a criação e manutenção dessas zonas de proteção."
            },
            {
                texto: "Aumento na diversidade de plantas.",
                afirmacao:2. *Plantar flora nativa e flores amigáveis aos polinizadores*: A plantação de flora nativa e flores que são amigáveis aos polinizadores é uma maneira eficaz de apoiar a saúde e a sobrevivência das populações de polinizadores. Plantas nativas são particularmente importantes porque evoluíram junto com os polinizadores locais, oferecendo os recursos certos, como néctar e pólen, durante todo o ano. Além disso, algumas flores são mais atraentes para polinizadores específicos devido ao seu formato, cor ou perfume. Promover o plantio dessas plantas em jardins residenciais, parques, áreas públicas e ao longo de estradas pode criar uma rede de micro-habitats que sustentam os polinizadores. Essa prática não apenas apoia a biodiversidade local, mas também melhora a estética das áreas urbanas e agrícolas, ao mesmo tempo em que contribui para a resiliência do ecossistema contra mudanças ambientais."
            }
        ]
    },
    {
        enunciado: "Qual o impacto da extinção de insetos nos ecossistemas aquáticos?",
        alternativas: [
            {
                texto: "Diminuição da diversidade de peixes  .",
                afirmacao: *Redução da poluição de águas*: A poluição dos corpos d'água, proveniente de resíduos industriais, esgoto e, particularmente, da agricultura, é uma ameaça significativa para os insetos aquáticos. Pesticidas e fertilizantes que escorrem para rios, lagos e córregos podem ser tóxicos para insetos aquáticos, que são uma parte fundamental da cadeia alimentar nesses ecossistemas. Reduzir essa poluição é crucial para a proteção dos insetos aquáticos. Isso pode ser alcançado através da implementação de práticas agrícolas mais sustentáveis, como a redução do uso de agroquímicos e a adoção de técnicas de agricultura de conservação que minimizam o escoamento de nutrientes e produtos químicos para os corpos d'água. Além disso, políticas mais rígidas de tratamento de esgoto e controle de resíduos industriais são necessárias para garantir que a água que chega aos habitats aquáticos seja limpa e segura para a vida selvagem."
            },
            {
                texto: "Aumento da população de aves .",
                afirmacao: *Monitoramento e pesquisa contínua*: Entender completamente os efeitos da extinção de insetos em ecossistemas aquáticos requer monitoramento e pesquisa contínuos. Os insetos aquáticos, como larvas de libélula, mosquitos, e outros, desempenham papéis críticos na cadeia alimentar, servindo como fonte de alimento para peixes, anfíbios e aves. Perdas significativas nessas populações podem ter efeitos em cascata em todo o ecossistema. Por isso, é fundamental conduzir pesquisas contínuas para monitorar as populações de insetos, identificar os fatores que mais ameaçam sua sobrevivência e desenvolver estratégias de manejo eficazes para proteger esses ecossistemas. Programas de monitoramento comunitário, onde cidadãos locais ajudam na coleta de dados, também podem ser uma ferramenta poderosa para aumentar a conscientização e envolver a comunidade na conservação de seus recursos naturais."         
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