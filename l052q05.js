// Desenvolver um programa que apresente todos os números divisíveis por 4 que sejam menores que 20.

let cont = 0;
let n = 4;

do{
 if( cont % 4 === 0){
    console.log(` ${cont}`);
 }

cont += 1;
}while( cont <= 20);