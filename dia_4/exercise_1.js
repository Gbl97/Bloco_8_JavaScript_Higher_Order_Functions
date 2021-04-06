
const assert = require('assert');

const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
];

function flatten() {
  // escreva seu código aqui
  const sumArray = (newArray, array) => newArray.concat(array);
  const unindoArray = arrays.reduce(sumArray, []);
  return unindoArray;
}
// console.log(flatten());
assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);