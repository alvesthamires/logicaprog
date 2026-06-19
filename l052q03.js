// Desenvolver um programa que apresente o total da soma dos cinco primeiros números inteiros.

let cont = 0;
let acum = 0;

do{
acum = acum + cont;
cont += 1;
}while( cont <= 5);

console.log( `A soma dos 5 primeiros números é: ${acum}`);