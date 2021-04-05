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

// exercicio 1