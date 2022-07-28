/* Métodos/Funções de seleção no DOM 
querySelector()     ->  selecionar UM elemento
querySelectorAll() -> selecionar VÁRIOS elementos 
getElementById() -> seleciona UM elemento pelo ID 

Obs.: querySelector() e querySelectorAll() utilizam
a sintaxe de seletores do CSS. */

//  Acessando  ao elemento h1 através do id

const exemploTitulo = document.getElementById("titulo");
console.log(exemploTitulo);

/* const exemploTitulo = document.querySelector("#titulo");
console.log(exemploTitulo); */

// Acessando elementos usando querySelectorALL
/* const subtitulos = document.querySelectorAll("h3");
console.log(subtitulos); */

// Modificando elementos DOM




const pagina = document.querySelector("body")




const msg = document.querySelector("#mensagem");
pagina.addEventListener("click", function () {
    msg.textContent = "Texto que quisesse!!!";
    msg.style.textAlign = "center";
});

/* Exemplo 02: protótipo de modo noturno */

const botao = document.querySelector("#noturno");
botao.addEventListener("click", function () {
    pagina.classList.toggle("modo-noturno");
});


/* Exemplo 03: simulação de cadastro
Evento de formulário, capturar dados do
formulário, calcular valores, tratar valores,
criar elementos dinamicamente. */

// Selecionando os elementos que serão trabalhados
const formulario = document.querySelector("form");
const campoNome = document.querySelector("#nome");
const campoNota1 = document.querySelector("#nota1");
const campoNota2 = document.querySelector("#nota2");



// Programando o evento de acionamento do formulário
formulario.addEventListener("submit", function (event) {
    event.preventDefault();


    // Capturando o que foi digitado nos campos
    let nome = campoNome.value;
    let nota1 = parseFloat(campoNota1.value)
    let nota2 = parseFloat(campoNota2.value)
    let media = calcularMedia(nota1, nota2)
    let situacao = situacaoFinal(media)
    mostrarSituacaoFinal = (nome, media, situacao)
})
function calcularMedia(nota1, nota2) {
    // Calculando a média
    return (nota1 + nota2) / 2
};


function situacaoFinal(media) {
    // Verificando situação doa luno (aprovado/reprovado)
    return media >= 7 ? "Aprovado" : "Reprovado"
};

function mostrarSituacaoFinal(nome, media, situacao) {
    // 1) Criar um elemento dinamicamente 
    const paragrafo = document.createElement("p")
    const divRelatorio = document.querySelector("#relatorio")
    // 2) Montar um conteúdo deste novo elemento
    paragrafo.textContent = `${nome} - ${media} - ${situacao}`
    if (situacao === "aprovado") {
        paragrafo.className = "AlunoAprovado"
    } else {
        paragrafo.className = "AlunoReprovado"
    }
    // 3) Colocar este novo elemento/conteúdo na div
    divRelatorio.appendChild(paragrafo)
};





 // Final de função/evento fo formulário

// function limpa(click){
//     document.querySelector(".limpa1")
//     limpa.addEventListener(".limpa1")
//     console.log("OK!");
// };


