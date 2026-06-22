let valor, taxa, tempo, prestacao;

console.log("Digite o valor (sem os juros) da sua prestação:  ");
valor = 100;

console.log("Digite a taxa de juros: ");
taxa = 20;

console.log("Digite o tempo ( em dias): ");
tempo = 30;

prestacao = valor + (valor * (taxa / 100) * tempo);

console.log(`O valor da sua prestação em atraso é ${prestacao}`);


