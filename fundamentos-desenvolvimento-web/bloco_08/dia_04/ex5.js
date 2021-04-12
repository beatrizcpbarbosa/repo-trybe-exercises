
const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  // escreva seu código aqui
    const numeroVezes = names.reduce((acc, item) => {
        const Arrayletras = item.split('');
        const letraA = Arrayletras.filter((item) => (item.toUpperCase() === 'A')).length;
        return acc + letraA;
    }, 0);
    return numeroVezes;
}

assert.deepStrictEqual(containsA(), 20);