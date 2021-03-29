// Exercício 1
const pessoaContrada = (nome) => {
    return pessoa = {
        nome: nome,
        email: `${nome.split(' ').join('').toLowerCase()}@trybe.com`
    }
}
// console.table(pessoaContrada('Gabriel Pereira'));

const newEmployees = (pessoaContrada) => {
    const employees = {
      id1: pessoaContrada('Pedro Guerra'),// Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro
      id2: pessoaContrada('Luiza Drumond'),// Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro
      id3: pessoaContrada('Carla Paiva')// Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro
    }
    return employees;
  };
console.log(newEmployees(pessoaContrada));

// // Exercício 2
// const verificaNumero = () => {

// }
// Exercício 3
// Exercício 4