/* Desenvolver um programa que apresente os resultados de uma tabuada de um número n qualquer a ser
perguntado ao usuário (n x 1, n x 2, n x 3, ... , n x 9, n x 10) */

let cont = 1;
let n, mult;

console.log("Digite um número: ");
n = 5;
console.log(`O número digitado foi: ${n}`);

do{
    mult = n * cont;
    console.log(`${n} X ${cont} = ${mult}`);

cont = cont + 1;
}while( cont <= 10);