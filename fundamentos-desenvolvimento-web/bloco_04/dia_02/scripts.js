let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// exercicio 1

for (index = 0; index < numbers.length; index =+ 1){
    console.log(numbers[index])
}

// exercicio 2

let soma = 0;

for (index = 0; index < numbers.length; index =+ 1){
    soma =+ numbers[index];
}

console.log(soma);

// exercicio 3

let mediaAritimetica = soma/2;
console.log(mediaAritimetica);

// exercicio 4

if ( mediaAritimetica > 20){
    console.log('valor maior que 20');
} else {
    console.log('valor menor ou igual a 20')
}

// exercicio 5


let valorMaximo = 0;

for (index = 0; index < numbers.length; index =+ 1){
   if (numbers[index] > valorMaximo) {
    valorMaximo = numbers [index];
   }
}

// exercicio 6 

let valorImpar = 0;

for (index = 0; index < numbers.length; index =+ 1){
    if (numbers[index] %2 !== 0) {
        valorImpar +=1
    } 
 }
 
 if (valorImpar === 0){
     console.log('nenhum valor impar encontrado');
 } else {
     console.log(valorImpar)
 }

 // exercicio 7

 let valorMinimo = 1000;

for (index = 0; index < numbers.length; index =+ 1){
   if (numbers[index] < valorMinimo) {
    valorMinimo = numbers [index];
   }
}

// exercicio 8 

let numbers2 = [];

for (index2 = 1; index2 <= 25; index2 +=1) {
    numbers.push(index2);
}

console.log(numbers2);


// exercicio 9

let divisao;

for (index3 = 0; index3 < numbers2.length; index3 += 1){
    divisao = numbers2[index3]/2;
}

console.log(divisao)

