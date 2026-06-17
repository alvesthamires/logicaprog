//Desenvolver um programa que pergunte um valor numérico inteiro e faça a exibição desse valor caso seja 
// divisível por 4 e 5. Não sendo divisível por 4 e 5, o programa deverá exibir a mensagem “Valor não é divisível por
//4 e 5”.

let num;

console.log("Digite um número: ");
num = 20;

if(num % 4 == 0 && num % 5 == 0 ){
    console.log("O número inserido é: ", num);
}else{
    console.log("Valor não é divisível por 4 e 5");
}