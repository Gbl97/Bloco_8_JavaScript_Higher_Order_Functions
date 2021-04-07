const assert = require('assert');

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage(students, grades) {
  // escreva seu código aqui

  const sumGrades = (acc, grade) => acc += grade;
  const estudante = students.map((student, index) => {
   return {
      name: student,
      average: grades[index].reduce(sumGrades)/ grades[index].length,
    };
  });
  return estudante;
}

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];
// console.log(studentAverage(students, grades));
assert.deepStrictEqual(studentAverage(students, grades), expected);