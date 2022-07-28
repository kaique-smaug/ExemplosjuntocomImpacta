/* Condicionais */
// if,else. if else

const aluno = "Marinho";
const nota1 = 9;
const nota2 = 8;
const media = (nota1 + nota2) / 2;
console.log(`Aluno: ${aluno}` );
console.log( `Notas: ${nota1} e ${nota2}`);
console.log(` Média obtida: ${media}`);

if ( media >= 7 ){
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}

/* Algoritmo: níveis de desempenho

Se a média do aluno for menor que 3, então
desempenho foi péssimo. 

Senão, se for menor que 5, então ruim. 

Senão, se menor que 7, então regular. 

Senão, se menor que 9, então bom.

Senão, se não for nenhuma das anteriores, então ótimo. */

let desempenho;   // indefinida              

if (media < 3){
    desempenho = "Péssimo"
} else if ( media < 5){
    desempenho = "Ruim"
} else if ( media < 7){
    desempenho = "Regular"
} else if ( media < 9){
    desempenho = "Bom"
} else {
    desempenho = "ótimo"
}
console.log(`desempenho`);

/* Sintaxe alternativa/abreviada
para condicional if/else utilizando o operador ternário ?: */
console.log(media>=7 ? "Aprovado" : "Reprovado");

if( (nota1 >= 0 && nota1 <= 10)  && (nota2 >= 0 && nota2 <= 10) ){
    media = (nota1 + nota2) / 2;
} else {
    console.log("Você digitou uma nota errada!");
}


