let produtos = [
    {nome: "Notebook", preco: 3500 },
    {nome: "Celular", preco: 2000},
    {nome: "Tablet", preco: 3500}
];

console.log(produtos[0]);
console.log(produtos[2]);
console.log("\n");


for(let produto of produtos){
    console.log(produto);
}

produtos[0].preco = 3800;
console.log(produtos);






