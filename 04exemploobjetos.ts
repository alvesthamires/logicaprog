// ao invés de declarar uma variável, declaro um *objeto "aluno"*
// EM TYPESCRIPT

let aluno: { nome: string; idade: number; ativo: boolean} = { 
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
