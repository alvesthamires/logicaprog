//Desenvolver um programa que pergunte um número, e apresente como resposta se o referido número é par ou
//é ímpar.

let num;

console.log("Digite um número: ");
num = 6;
console.log(`O número digitado é: ${num}`);

if(num % 2 == 0 ){
    console.log('O ${num} é par');
}else{
    console.log('${num} é ímpar');
}
