//página 14; módulo 14

// item 1
let info = {
   nome: "Thamires",
   idade: 21,
   matriculada: true

};

// item 2
console.log(`Nome: ${info.nome}`);
console.log(`Idade: ${info.idade}`);
if( info.matriculada ){
    console.log( "Matriculada: Sim ");
}else{
    console.log("Matriculada: Não ");
}

console.log("\n");

//item 3
//alterando o valor da idade
info.idade = 25;
console.log( info );