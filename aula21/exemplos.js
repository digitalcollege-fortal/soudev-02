
let pessoaAntiga = {
    nome: "Lane",
    endereco: "Rua Barca Velha, 297 - Quintino Cunha",
    telefones: [
        "85 1234",
        "85 9876"
    ]
};

//pessoaAntiga.telefones[1]

let pessoa = {
    nome: "Lane",
    endereco: {
        logradouro: "Rua Barca Velha",
        numero: 100,
        bairro: "Quintino Cunha"
    },
    telefones: [
        {
            op: "Vivo",
            numero: "85 1235"
        },
        {
            op: "Oi",
            numero: "85 1234"
        }
    ],
    historico: [
        [//1
            [//2
                {//3
                    "nome": "Valor"
                }
            ]
        ]
    ]
};

//bairro
// pessoa.endereco.bairro

//telefone 2
alert(pessoa.telefones[1].numero)

alert(pessoa.historico[0][0][0].nome);
