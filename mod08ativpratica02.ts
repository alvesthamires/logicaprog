// Criar uma função calcularArea(base, altura) que
// retorne a área de um retângulo 

function calcularArea(base: number, altura: number): number{   //:number érefere-se ao return; "esse retorno é de que tipo?" 
      let area: number = base * altura;
      return area;
}

let a: number = calcularArea(2, 3);
console.log(`A área do retângulo é ${a}`);

console.log("\n");


let n1: number = 5, n2: number = 8;
let n3: number = calcularArea(n1, n2);
console.log(`A área do retângulo é ${n3}`);
console.log("\n");



/* Criar uma função converterCelsius(temp) que converta
Celsius para Fahrenheit: (temp * 9/5) + 32 */

function converterCelsius(temp: number): number{
    return(temp * 9/5) + 32;
}

console.log(`40 Celsius = ${converterCelsius(40)} Fahrenheit`);
console.log("\n")



/* Criar uma função saudacaoPersonalizada(nome) que
retorne "Olá, [nome]! Seja bem-vindo." */ 

function saudacaoPersonalizada(nome: string): string{  //variável local
 return `Olá, ${nome}! Seja bem-vindo(a).`
}

console.log(saudacaoPersonalizada("Ana"));
console.log("\n");

//ou desse jeito
let n: string= "Bruno"; // variável global
console.log(saudacaoPersonalizada(n)); //nome é parâmetro; vem da função