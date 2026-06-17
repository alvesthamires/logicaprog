// 2) Elaborar um programa que pergunte o nome do usuário, quatro valores inteiros e apresente 2 resultados:
//  a) Resultado de suas adições
//  b) Resultado de suas multiplicações
// Exibir ao início uma saudção ao usuário!

//OBS: NÃO TEM COMO INTERAGIR COM O JAVASCRIPT COMO É NA LINGUAGEM C, POR EXEMPLO.


//declarando variáveis
let nome;
let num1, num2, num3, num4, soma, mult;

console.log("Informe o seu nome: ");

//leia(nome)    *(JavaScript não tem o "leia" igual o VisuAlg, então atribuo diretamente o que seria a resposta dele)
nome = "Thamires";

console.log("Informe o primeiro valor inteiro: ");
num1 = 5;

console.log("Informe o segundo valor inteiro: ");
num2 = 8;

console.log("Informe o terceiro valor inteiro: ");
num3 = 10;

console.log("Informe o quarto valor inteiro: ");
num4 = 12;

soma = num1 + num2 + num3 + num4;
console.log("A soma dos quatro valores inseridos é: ", soma); 

//exemplificando com texto e variável utilizando aspas duplas
console.log("SOMA: " + num1 + " + " + num2 + " + " + num3 + " + " + num4 + " = " + soma ) 

mult = num1 * num2 * num3 * num4;

//com aspas duplas
console.log("A multiplicação dos quatro valores inseridos é: ", mult); 

//com crase + &{nome da variável}
console.log(`A multiplicação dos quatro valores inseridos é: ${mult}`); 


//exemplificando com texto e variável utilizando crase
console.log(`MULTIPLICAÇÃO: ${num1} X ${num2} X ${num3} X ${num4} = ${mult}`);