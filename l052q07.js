// Desenvolver um programa que apresente as potências de 2, variando de 0 a 10.

let cont = 0;
let pot = 2;
let faca;

do{
faca = pot ** cont;
console.log(` ${pot} elevado à ${cont} = ${faca}`);
 cont += 1;
}while( cont <= 10);