// exercicio 1
const newEmployees = (geraremail) => {
    const employees = {
      id1: geraremail('Pedro Guerra'),
      id2: geraremail('Luiza Drumond'),
      id3: geraremail('Carla Paiva'),
    }
    return employees;
  };

  function geraremail(NomeCompleto) {
    const email = NomeCompleto.toLowerCase().split(' ').join('_');
    return {
        NomeCompleto,
        email: `${email}@betrybe.com`
    };
  }

// exercicio 2
const sorteio = (meuNumero, checarNumber) => {
   let numeroSorteado = Math.floor(math,random() * 5);

   if (checarNumber(numeroSorteado, meuNumero) === true){
       return console.log("Parabéns você ganhou");
   } else {
        return console.log("Tente novamente");
   }
};

function checarNumber(meuNumero, numeroSorteado){
    if(meuNumero === numeroSorteado){
     return true
    } else {
     return false
    }
}

