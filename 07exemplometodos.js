class Pessoa {
   nome;
   idade;

    //Método construtor (ajuda a criar os objetos)
   //dentro da classe
   constructor( nome, idade){
      this.nome = nome;
      this.idade = idade;
   }

    //Método comum
    apresentar(){
        console.log(`Olá! Meu nome é ${this.nome}!`);
    }
} //fim da classe Pessoa


// instanciando objeto usando o construtor
 let pessoa1 = new Pessoa("Roberto", 33);

 console.log( pessoa1 );

 // toda vez que chamar um método tem que colocar parênteses para o diferenvciar de uma variável
 //chamando o método apresentar da classe Pessoa
 pessoa1.apresentar();