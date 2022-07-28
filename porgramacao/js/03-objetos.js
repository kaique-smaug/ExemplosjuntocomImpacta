/* Objetos
coleção de dados não indexados.
Formadas pot pares de chave de chave/valor */

const livro = {
    // Chave : velor
    titulo : "Senhor dos Anéis",
    autor : "Tolkien",
    ano : 1954
};

console.log( livro.titulo );
console.log ( livro.ano );


// Exemplo2 : objeto com array e outro objeto
const pessoa = {
    nome   : "Silvinho",
    idade : 85,
    sexo : "Masculino",
    telefones : ["11-5555-6666", "11-8888-9999"], 
    medidas : {
        peso : 100,
        altura : 1.98,
    }
};

console.log( pessoa.nome );
console.log( pessoa.idade );
console.log( pessoa.telefones[1] );
console.log( pessoa.medidas.altura );

  
/* Exercícios
1) Crie um array de obejtos chamado livros, contendo
3 objetos/livro, cada um com um título e um autor.

2) Mostre no console o título e o autor de 
pelo menos 1 dos livros. */
const Livros = [ 
           { 
            titulo : "A Arte da Guerra",
            autor : "Sun tzu"
            },
            {
             titulo : "O Principe",
             autor :  "Nicolau Maquiavel"
            },
            {
                titulo :"Senhor dos Aneis",
                autor  : "j. r. r. tolkien"


            },
];

console.log( Livros[2].titulo );
console.log( `Titulo: ${livro[0].autor} `);