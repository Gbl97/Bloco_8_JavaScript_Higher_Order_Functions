
const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  // escreva seu código aqui
  const countLetter = (acc, nome) => {
    let regExp = /a/gi;
    const getLetter = nome.match(regExp).length;
    return acc + getLetter;
  };
  const letter = names.reduce(countLetter, 0);
  return letter;
}
// console.log(containsA());
assert.deepStrictEqual(containsA(), 20);