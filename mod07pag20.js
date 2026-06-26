let produtos = [
    {nome: "Notebook", preco: 3500 },
    {nome: "Celular", preco: 2000},
    {nome: "Tablet", preco: 3500}
];

console.log(produtos[0].nome);
console.log(produtos[2].nome);
console.log("\n");


for(let produto of produtos){
    console.log(`Produto: ${produto.nome} | Preço: R$ ${produto.preco.toFixed}`);
}

produtos[0].preco = 3800;
console.log(produtos);






