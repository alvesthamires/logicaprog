// Desenvolver um programa que apresente os quadrados dos números inteiros de 2 a 50.

let cont = 2
let quad;

do{
quad = cont * cont;
console.log(`O quadrado de ${cont} é ${quad}`);

cont += 1;
}while( cont <= 50 );