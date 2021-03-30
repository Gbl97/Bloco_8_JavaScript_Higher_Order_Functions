// Exercício 1
const pessoaContrada = (nome) => {
    return pessoa = {
        name: nome,
        email: `${nome.split(' ').join('').toLowerCase()}@trybe.com`
    }
}
// console.table(pessoaContrada('Gabriel Pereira'));

const newEmployees = (fn) => {
    const employees = {
      id1: fn('Pedro Guerra'),// Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro
      id2: fn('Luiza Drumond'),// Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro
      id3: fn('Carla Paiva')// Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro
    }
    return employees;
  };
  console.log(newEmployees(pessoaContrada));
// console.log(newEmployees(pessoaContrada).id1);

// // Exercício 2
const verificaNumero = (number) => {
    let sorteio = Math.floor(Math.random()*5 + 1);
    // ou Math.ceil(Math.random()*5);

    console.log(sorteio);

    if (sorteio === number) {
        return true;
    }
    return false;
}


const sorteio = (number, funcao) => {
    funcao = verificaNumero(number);

    if (funcao === true) {
        return `Parabéns você ganhou`
    }
    return `Tente Novamente`;
}
console.log(sorteio(5,verificaNumero));

// Exercício 3
const validaResposta = (respostaUsuario) => {
    return (respostaCerta) => {
      if (respostaUsuario === respostaCerta) {
          return true;
      }
      return false;
    }
}

console.log(validaResposta ('QualquerCoisa') ('coisa'));

// Exercício 4
const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const verificaResposta = (rightAnswers, studentAnswers) => {
    let cont = 0;
    for (let index = 0; index < rightAnswers.length; index += 1) {

        if (studentAnswers[index] === 'N.A') {
            cont += 0;
        } else if(rightAnswers[index] === studentAnswers[index]) {
            cont += 1;
        } else {
            cont -= 0.5;
        }
    }
    return cont;

}

const respostaCorreta = (rightAnswers, studentAnswers, funcao) => {
    funcao = verificaResposta(rightAnswers, studentAnswers);

    return funcao;
}

console.log(respostaCorreta(rightAnswers, studentAnswers, verificaResposta));