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

