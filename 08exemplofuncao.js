// Material 08 (Modularização e Funções) - Página 06

let num;


function somar(a, b){
    // resultado -> variável LOCAL
  let resultado = a + b;
  return resultado;
}


 direcionador();

// exinindo imediatamente o valor resultornado pela função
 console.log( somar(5, 3)); // ao chamar o "somar" a leitura do código volta lá para cima 


 //guardando o valor retornado em uma variável
 num = somar(10, 20);
 console.log( num );


 //o retorno da função se perde
 somar(4, 5); // não exibe pq não tem nenhuma variável para receber o resultado


 function direcionador(){
console.log("Siga em frente! Estude sempre!");
 }

 //chamando a função direcionador
 direcionador();
 direcionador();

 let texto = direcionador();
 console.log( texto ); // variável não recebe retorno da função

 function mensagem(){
    return "Ame mais, brigue menos!"; // perdi o retorno da função
 }
    
 //chamando a função mensagem
 mensagem();
 console.log( mensagem() );
 console.log("\n");

 function tudao(){
    console.log("Início da função tudao()");
    direcionador(); //chamando a função direcionador
    let calc = somar(2, 3);
    console.log(`Resultado da soma: ${calc}`);
    let msg = mensagem();
    direcionador();
    console.log(`Mensagem do dia: ${msg}`);
    console.log("Fim da função tudao()");
 } 

 //chamando a função tudao
tudao();


 let cont //global
 for( cont = 0; cont <= 3; cont++){
    console.log( cont );
 }
