// Desenvolver um programa que apresente as potências de 2, variando de 0 a 10.

let pot = 2;
let faca;

for( let cont = 0; cont <= 10; cont++){
  faca = pot ** cont;
  console.log( `${pot} elevado à ${cont} = ${faca}`);

}