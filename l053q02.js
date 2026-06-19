/* Desenvolver um programa que apresente o total da soma de n números inteiros do número 1 até n, onde n é um
valor informado pelo usuário. */

let n;
let acum = 0;

console.log("Digite um valor: ");
n = 6;
console.log(`O número digitado foi ${n}`);

for(let cont = 1; cont <= `${n}`; cont++){
 acum = acum + cont;

}
console.log(`A soma dos ${n} primeiros números inteiros é ${acum}`);