//Desenvolver um programa que pergunte dois valores numéricos inteiros e apresente o valor da diferença entre o
//maior valor e o menor valor lido.

let num1, num2, subt1, subt2;

console.log("Digite o primeiro valor numérico inteiro: ");
num1 = 10;
console.log(`${num1}`);

console.log("Digite o primeiro valor numérico inteiro: ");
num2 = 30;
console.log(`${num2}`);

subt1 = num1 - num2;
subt2 = num2 - num1;


if( num1 > num2){
       console.log("A diferença dos valores numéricos inteiros é:  ", subt1);
}else{
    console.log("A diferença dos valores numéricos inteiros é:  ", subt2);
}

