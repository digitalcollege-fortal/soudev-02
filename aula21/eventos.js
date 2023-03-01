
let contatos = [
    {
        nome: "Mariana",
        telefone: "85 9 1234-1234"
    },
    {
        nome: "Carol",
        telefone: "88 9 2345-1234"
    },
    {
        nome: "Samantha",
        telefone: "88 9 5345-1234"
    },
    {
        nome: "Maia",
        telefone: "88 9 9945-1234"
    },
    {
        nome: "Sara",
        telefone: "88 9 8845-1234"
    },
    {
        nome: "Giselle",
        telefone: "88 9 9745-1234"
    },
    {
        nome: "Ana kelly",
        telefone: "88 9 7745-1234"
    },
    {
        nome: "Anyele",
        telefone: "88 9 9045-1234"
    },
    {
        nome: "Rebeca Costa",
        telefone: "88 9 7745-1234"
    },
    {
        nome: "Marilia",
        telefone: "88 9 7845-1234"
    },
    {
        nome: "Maria Chiquinha",
        telefone: "88 9 7845-1234"
    },
    {
        nome: "Ana Maria",
        telefone: "88 9 7845-1234"
    },
    {
        nome: "fulana",
        telefone: "85 12361"
    }
];


function exibir(cadaContato) {
    lista.innerHTML += `<li> <strong> ${cadaContato.nome}: </strong> ${cadaContato.telefone} </li>`;
}

contatos.forEach(exibir);



// contatos.forEach(function (cadaContato) {
//     lista.innerHTML += `<li> <strong> ${cadaContato.nome}: </strong> ${cadaContato.telefone} </li>`;
// });

// contatos.forEach((cadaContato) => {
//     lista.innerHTML += `<li> <strong> ${cadaContato.nome}: </strong> ${cadaContato.telefone} </li>`;
// });


// for (x = 0; x <= 9; x++) {
//     lista.innerHTML += `<li> <strong> ${contatos[x].nome}: </strong> ${contatos[x].telefone} </li>`;
// }


// let nome = "Lane";
// nome += " da Silva";
// let cidade = "Fortaleza";
// let idade = 25;

// document.write("Oi, me chamo " + nome + ", moro em " + cidade + ", e tenho " + idade + " anos de idade");
// document.write(`<br>Oi, me chamo ${nome}, moro em ${cidade}, e tenho ${idade} anos de idade`);
