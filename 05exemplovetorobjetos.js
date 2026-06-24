// módulo: 14 página: 16

// declarando um vetor de objetos "aluno"

let alunos = [
 { nome: "Ana", idade: 18, ativo: true},
 { nome: "Carlos", idade: 22, ativo: false},
 { nome: "Maria", idade: 20, ativo: true}
];
   console.log( alunos );
   console.log("\n");
   
   //acessando pelo índice e com a propriedade
   console.log( alunos[0].nome);
   console.log(`Nome do primeiro(a) aluno(a): ${alunos[0].nome}`);
   console.log("\n");

   // Não funciona dessa forma
   console.log(`Todos os dados do(a) primeiro(a) aluno(a): ${alunos[0]}`);
   console.log("\n");
   
   console.log(alunos[0]);
   console.log("\n");

   
   //percorrendo o vetor de objetos com for clássico
   for( let cont = 0; cont < alunos.length; cont++){
     console.log(`Nome: ${alunos[cont].nome}`);
     console.log(`Idade: ${alunos[cont].idade}`);
     console.log(`Ativo: ${alunos[cont].ativo} \n`);

   }
      console.log("\n");

  //percorrendo o vetor de objetos com for of
   for( let aluno of alunos){  //aluno é um objeto ; alunos é um vetor de objetos
     console.log(` Nome: ${aluno.nome}`);
     console.log(` Nome: ${aluno.idade}`);
     console.log(` Nome: ${aluno.ativo} \n`);
   }

