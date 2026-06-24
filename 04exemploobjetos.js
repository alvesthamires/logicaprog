// ao invés de declarar uma variável, declaro um *objeto "aluno"*

let aluno = {
 //chave & valor
  nome: "João",
  idade: 20,
  ativo: true
};


console.log(aluno); // exibe o objeto completo
console.log("\n");

console.log(aluno.nome); //
console.log("\n");

console.log(`Nome do aluno: ${aluno.nome}`);
console.log(`Idade: ${aluno.idade}`);
if( aluno.ativo === true){
    console.log("Situação: Ativo")
}else{
    console.log("Situação: Inativo")
}
console.log("\n");


//Exemplo notação de conchetes 
let propriedade = "nome";
console.log(aluno[propriedade]); //João //outra forma de chamar o cinteúdo lá de cima
console.log("\n");

// outra forma que também funciona
console.log(aluno["idade"]); //20
console.log("\n");


//exemplo do módulo 14, pág. 13
let produto = {
    nome: "Notebook",
    preco: 3000
};
console.log( produto );

//Modificando o preço do notebook
produto.preco = 2800;
console.log( produto );
console.log("\n");


//Adicionar uma nova chave
produto.estoque = 15;
console.log( produto );
