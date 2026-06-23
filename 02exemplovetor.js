//VETORES

//vetor com nomes de alunos

let alunos = [ "Ana", "Bruno", "Carlos", "Diana"];

//ver com notas de alunos
let notas = [8.5, 3, 8, 10];

console.log(alunos); //exibe os dados do vetor todo
console.log(alunos[0]);
console.log(alunos[1]);

alunos[2] = "Antônio";
console.log(alunos); //vetor todo (agora com "Antônio" no lugar de "Carlos")
console.log("\n");

//for para percorrer cada índice do vetor alunos

for( let cont = 0; cont < 4; cont++){
    console.log(alunos[cont]); //exibe os dados do vetor
}
console.log("\n");


// outra forma de exibir com for

for( let cont = 0; cont < 4; cont++){
    console.log(`Aluno ${cont}: ${alunos[cont]}`); // interação entre número e variável
   
}
 console.log("\n");

//
for( let cont = 0; cont < 4; cont++){
 console.log(`Aluno(a) ${cont + 1}: ${alunos[cont]}`); // interação entre número e variável
}



console.log(notas); //exibindo todas as notas
console.log( notas[2]); //exibindo a nota do índice 2
 console.log("\n");


//for para percorrer cada índice dos dois vetores
for( let cont = 0; cont < 4; cont++){
   console.log(`Nome: ${alunos[cont]}  -  Nota: ${notas[cont]}`);

}
 
console.log(alunos.length); //tamanho do vetor : 4
  console.log("\n");

//pode usar "length" no for também
for( let cont = 0; cont < alunos.length; cont++){
    console.log(`Aluno ${cont}: ${alunos[cont]}`); 
 
}

  console.log("\n");



//EXEMPLO COM FOR OF 
for( let aluno of alunos ){
   console.log(`Nome: ${aluno}`);
}
console.log("\n");


//EXEMPLO COM forEACH
//aluno recebe o dado do vetor, índice recebe o índice do vetor. ESTES PARÂMETROS FUNCIONAM NESTA ORDEM. Não devem ser invertidos.
alunos.forEach(function(aluno, indice){ //indice é o contador
console.log(`índice: ${indice}, aluno: ${aluno}`);
});

   console.log("\n");

// métodos push, unshift, pop e shift
// push - adiciona ao FINAL do vetor (considera 'Raimundo' daqui para baixo)
alunos.push( "Raimundo");
console.log(alunos);

 console.log("\n");

// pop - remove DO FINAL  do vetor 
alunos.pop();
console.log(alunos);

 console.log("\n");


// unshift - adiciona ao INÍCIO do vetor
alunos.unshift("Raimundo");
console.log(alunos);

console.log("\n");


// shift - remove DO INÍCIO do vetor
alunos.shift();
console.log(alunos);