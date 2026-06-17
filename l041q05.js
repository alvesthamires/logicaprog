//Desenvolver um programa que pergunte 4 notas escolares de um aluno e exiba mensagem informando que o
//luno foi aprovado se a média escolar for maior ou igual a 5. Se o aluno não foi aprovado, indicar uma
//mensagem informando essa condição. Apresentar junto com a mensagem de aprovação ou reprovação o valor
//da média obtida pelo aluno.


let nota1, nota2, nota3, nota4, media;

console.log("Digite a primeira nota: ");
nota1 = 4;

console.log("Digite a primeira nota: ");
nota2 = 4;

console.log("Digite a primeira nota: ");
nota3 = 4;

console.log("Digite a primeira nota: ");
nota4 = 4;

media = (nota1 + nota2 + nota3 + nota4) / 4

if( media >= 5){
    console.log("VOCÊ ESTÁ APROVADO(A)!");
    console.log("Sua média é: ", media);
   
} else{
    console.log("VOCÊ ESTÁ REPROVADO(A)!");
    console.log("Sua média é: ", media);
    
}
        


