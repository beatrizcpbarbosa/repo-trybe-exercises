// exercicio 1

let a = 5;
let b = 10;
let c = 15;

let soma = a + b;
    console.log(soma);

let subtração = b - a;
    console.log(subtração);

let multiplicação = a * b;
    console.log(multiplicação);

let divsão = b / a;
    console.log(divisão);

let modulo = b % a;
    console.log(modulo);

// exercicio 2

if (a > b) {
    console.log('a é maior')
} else if (b > a) {
    console.log('b é maior')
} else {
    console.log('empate')
}

// exercicio 3

if (a > b && a > c) {
    console.log('a é maior')
} else if (b > a && b > c) {
    console.log('b é maior')
} else {
    console.log('c é o maior')
}

//exercicio 4

if (a > 0) {
    console.log('positive')
} else if(a <0) {
    console.log('negative')
} else {
    console.log('zero')
}

//exercicio 5

if (a + b + c === 180){
    console.log(true)
} else {
    console.log(false)
}

// exercicio 6

let peçaXadrez = 'rainha';

switch (peçaXadrez.toLocaleLowerCase()) {
  case 'rei':
    console.log('rei faz tal movimento');
    break;
  case 'dama':
    console.log('dama faz tal movimento');
    break;
  case 'torre':
    console.log('torre faz tal movimento');
    break;
  case 'rainha':
    console.log('rainha faz tal movimento');
    break;
  case 'cavalo':
    console.log('cavalo faz tal movimento');
    break;  
  default:
    console.log('não existe essa peça');
}    


// exercicio 7

let nota = 50;

if (nota >= 90 && nota <= 100 ) {
  console.log('A');
} else if (nota >= 80 && nota <= 90) {
  console.log('B');
} else if (nota >= 70 && nota <= 80) {
  console.log('c');
} else if (nota >= 60 && nota <= 70) {
  console.log('D');  
} else if (nota >= 50 && nota <= 60) {
  console.log('E'); 
} else if (nota < 50 && nota > 0) {
  console.log('F');
} else {
  console.log('não existe');
}

// exercicio 8

if ( a%2 === 0 || b%2===0 || c%2 === 0){
  console.log('true')
} else {
  console.log('false')
}

// exercicio 9

if ( a%2 !== 0 || b%2 !==0 || c%2 !== 0) {
  console.log('true')
} else {
  console.log('false')
}

// exercicio 10

let custoProduto = 10;
let valorVenda = 20;
let imposto = custoProduto * 0.2;
let valorCustoTotal = custoProduto + imposto;
let lucro = valorVenda - valorCustoTotal
let lucroTotal;

if ( custoProduto > 0 && valorVenda > 0) {
  lucroTotal = lucro * 1000;
  console.log('o lucro é' + lucroTotal)
} else {
  console.log('erro')
  }

// exercicio 11

let descontoINSS;
let descontoIR;

let salarioBruto = 3.500;


if (salarioBruto <= 1556.94) {
  descontoINSS = salarioBruto * 0.08;
} else if (salarioBruto <= 2594.92) {
  descontoINSS = salarioBruto * 0.09;
} else if (salarioBruto <= 5189.82) { 
  descontoINSS = salarioBruto * 0.11;
} else {
  descontoINSS = 570.88
}

let salarioBase = salarioBruto - descontoINSS;

if (salarioBase <= 1903.98) {
  descontoIR = 0;
} else if (salarioBase <= 2826.65) {
  descontoIR = (salarioBase * 0.075) - 142.80;
} else if (salarioBase <= 3751.05) {
  descontoIR = (salarioBase * 0.15) - 354.80;
} else if (salarioBase <= 4664.68) {
  descontoIR = (salarioBase * 0.225) - 636.13;
} else {
  descontoIR =(salarioBase * 0.275) - 869.36;
}

let salarioLiquido = salarioBase - descontoIR;

console.log('salario é' + salarioLiquido)