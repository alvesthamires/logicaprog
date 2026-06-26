let numeros = [5, 6, 4, 3, 2];
let acum = 0;
        for(let cont = 0; cont < 5; cont++){
           soma = numeros[cont];
           acum = acum + soma;
        }
         console.log(`A soma de todos os elementos do vetor numeros é ${acum}`);