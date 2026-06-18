//Desenvolver um programa que apresente os quadrados dos números inteiros de 15 a 200.

let cont = 15;
let pot;


while(cont <= 200){
    pot = cont * cont;
    console.log(`${cont} X ${cont} =  ${pot}`);
    cont++;
   
}