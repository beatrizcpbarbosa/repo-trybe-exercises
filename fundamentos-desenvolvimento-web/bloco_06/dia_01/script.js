function CriarEstados (){
    let inputEstado = document.querySelector('#estado');
    let estados = ['Selecione seu estado', 'AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];
    for (let index = 0; index < estados.length; index += 1) {
        let option = document.createElement('option');
        inputEstado.appendChild(option).innerText = estados[index];
        inputEstado.appendChild(option).value = estados[index];
      }
}

CriarEstados ();

function VerificaData (){
    
}

function stopForm(event) {
  event.preventDefault();
}