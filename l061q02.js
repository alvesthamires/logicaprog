/* Desenvolver um programa que pergunte o sexo da pessoa e dê como resposta a seguinte orientação de acordo
com o sexo informado: “Banheiro masculino à direita” ou “Banheiro feminino à esquerda”. */

let sexo;


console.log("Menu de Opções: ");
console.log("  Masculino ");
console.log("  Feminino ");

console.log(" Insira o seu sexo: ");
sexo = "Feminino";

switch ( sexo ){
    case "Feminino":
    console.log(" Banheiro feminino à esquerda ");
    break;

    case "Masculino":
    console.log(" Banheiro masculino à direita ");
    break;

    break;
}



