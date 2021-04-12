// parte 1 

let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  };

console.log('Bem vinda, ' + info['personagem']); 

info['recorrente'] = 'sim';

console.log(info);

for (let key in info){
    console.log(key);
}

for (let key in info){
    console.log(info[key]);
}

// exercicio 5 não entendi

let info2 = {
    personagem: "Tio Patinhas",
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: "O último MacPatinhas",
    recorrente: "sim"
  };

  if (info['recorrente'] === info2['recorrente']){
    info['recorrente'] && info2['recorrente'] === 'ambos recorrentes';
  }


//parte 2

// exercicio 1 não consegui

function DefinePalindromo (string) {
    
}

// exercicio 2

function indiceMaior (array) {
    let indiceMaior = 0;
    for (let index = 0; index < array; index += 1){
        if (indiceMaior < array[index]){
          indiceMaior = index;  
        }
    }
    return indiceMaior;
}

let array1 = [1,3,5,6,17,10];
console.log(indiceMaior(array1));

// exercicio 3



// exercicio 4



// exercicio 5


// exercicio 6

function soma(numero){
    let total = 0;
    for (let index = 0; index <= numero; index += 1){
        total += index;
    }
    return total;
}

console.log(soma(5));

// exercicio 7

function verificaFimPalavra(stringWord, stringEnding){

}

