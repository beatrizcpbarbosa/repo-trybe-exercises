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

   if (checarNumber (meuNumero, numeroSorteado) === true){
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

// exercicio 3 
function gabarito(correctAnswer) {
    return (userAnswer) => {
        if(correctAnswer === userAnswer){
            return true
        } else {
            return false
        }
    }
}

const correctAnswer = 'higher order function';
const userAnswer = 'HIGHER ORDER FUNCTION';

// exercicio 4
const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];


const checar = (rightAnswers, studentAnswers) => {
  totalPoints = 0;
  for (let index = 0; index < rightAnswers; index += 1 ) {
    if (studentAnswers[index] !== 'N.A') {
      if (rightAnswers[index] === studentAnswers[index]) {
        totalPoints += 1;
      } else {
        totalPoints -= 0.5;
      }
    }
  }
  return totalPoints;
}

const respostas = (rightAnswers, studentAnswers, checa) => {
  return `Resultado final: ${checar(correctAnswers, userAnswers)} pontos.`;
}



