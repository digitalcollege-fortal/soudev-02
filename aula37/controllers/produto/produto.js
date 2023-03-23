function cadastrar() {
    return "Cadastro de Produto";
}

function buscar() {
    return JSON.stringify([
        {
            id: 1,
            nome: 'Saia'
        },
        {
            id: 2,
            nome: 'Boné'
        }
    ]);
}

module.exports = {
    buscar,
    cadastrar,
};

