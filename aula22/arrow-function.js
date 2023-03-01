
// Forma normal
// function welcome(nome) {
//     return "Bem vinda " + nome;
// }

// Forma normal, anonima
// const welcome = function (nome) {
//     return "Bem vinda " + nome;
// }

// Arrow function normal
// const welcome = (nome) => {
//     return "Bem vinda " + nome;
// }

// Arrow function reduzida
// const welcome = (nome) => "Bem vinda " + nome;

// Arrow function reduzida com apenas 1 parametro
const welcome = nome => "Bem vinda " + nome;

const soma = (n1, n2) => n1 + n2;


soma(10, 20); // 30

welcome('Samantha'); // Bem vinda Samantha
welcome('Marilia'); // Bem vinda Marilia
