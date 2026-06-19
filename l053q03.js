// Desenvolver um programa que apresente os resultados de uma tabuada de um número qualquer informado
// pelo usuário.

let num, mult;

console.log("Digite um número: ");
num = 5;
console.log(`O número digitado foi ${num}`);
 
for( let cont = 0; cont <= 10; cont++){
    mult = `${num}` * cont;
    console.log(`${num} X ${cont} = ${mult}`);
}