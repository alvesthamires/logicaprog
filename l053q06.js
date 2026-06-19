/* Desenvolver um programa que apresente o valor de uma potência de uma base qualquer elevada a um expoente
qualquer, ou seja, de b elevado à e, onde os valores de b e e são fornecidos pelo usuário, sem utilizar Math.pow(). */


 let base, exp;
 let acum = 1

 console.log("Digite um númeto para a base: ");
 base = 2;
 console.log(`O número inserido para a base foi ${base}`);


 console.log("Digite um númeto para  o expoente: ");
 exp = 2;
 console.log(`O número inserido para o expoente foi ${exp}`);


 for( let cont = 1; cont <= exp; cont++ ){
    acum = acum * base;
 }
  console.log(`${base} elevado à ${exp} = ${acum}` );
   

