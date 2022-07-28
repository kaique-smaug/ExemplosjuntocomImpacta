/* Estruturas de Repetição 
(Também conhecidas como laços de repetição
ou loops)

while       (enquanto)
do/while    (faça/enquanto)
for         (para) */

// Exemplo 1: while
/* let contador = 1;
while( contador <= 10 ){
    console.log(`Valor de contador: ${contador}`);
    contador++; // incremento
    // contador = contador + 1;
} */

// Exemplo 2: do/while (SEMPRE FUNCIONARÁ PELO MENOS 1x)
// Nomes comuns para variáveis de controle: i, j, k
/* let i = 20;
do {
    console.log(`Valor de i é: ${i}`);
    i++;
} while( i <= 10 ); */

// Exemplo 3: for
/* for( let i = 1; i <= 5; i++ ){
    console.log(`Valor de i: ${i}`);
} */

// Exemplo 4: loop com array
let bandas = ["Rush", "Pink Floyd", "Van Halen", "Yes"];

/* for( let i = 0; i < bandas.length; i++ ){
    console.log(`Banda: ${bandas[i]}`);
}  */

/* for/of (bom para arrays) */
/* for( let banda of bandas ){
    console.log(`Banda: ${banda}`);
} */

/* for/in (bom para objetos) */
let pessoa = {
    nome : "Tiago",
    idade : 38,
    cidade : "São Paulo"
};

for( let dados in pessoa ){
    console.log(pessoa[dados]);
}








