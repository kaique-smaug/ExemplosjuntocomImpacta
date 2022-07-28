/* Funções:
Blocos de código com os seguintes objetivos:
- Organização de lógicas, separação de responsabilidades no programa
- Reaproveitamento de código */

/* Sintaxe 1 (tradicional)
Função anônima/literal */
let exemplo1 = function(){
    // Corpo da função
    console.log("Função anônima");
};

// Chamada da função
exemplo1();

/* Sintaxe 2 (tradicional) 
Função nomeada/declarada */
function exemplo2(){
    console.log("Função Nomeada");
}

// Chamada da função
exemplo2();


/* Sintaxe (moderna) 
Arrow Function (função seta/flecha) */
let exemplo3 = () => {
    console.log("Arrow Function");
}; 

exemplo3();

/* Funções com parâmetros/argumentos
e retorno de resultados/dados */
function soma ( valor1, valor2, valor3 = 0 ){
    return valor1 + valor2 + valor3;
}

console.log( soma(10, 20, 1000) );
console.log( soma(5, 50) );
console.log( soma(145, 20) );
console.log( soma(10, 20, 30) );

let teste1 = 250;
let teste2 = 500;
console.log( soma(teste1, teste2) );


console.log("-------------");

// Versão 1
/* function dobra(numero){
    return numero * 2;
} */

// Versão 2 (arrow function)
/* let dobra = (numero) => {
    return numero * 2;
}; */

// Versão 3 (arrow function)
// Omitimos parênteses, chaves e return
let dobra = numero => numero * 2;

console.log( dobra(10) );












