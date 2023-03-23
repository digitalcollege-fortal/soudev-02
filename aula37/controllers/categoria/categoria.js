const categorias = require("./model");

function cadastrar() {
    return "Cadastro de Categoria";
}

function buscar() {
    return JSON.stringify(categorias);
}

function buscarUm(id) {
    let busca = categorias.filter((cada) => {
        return cada.id == id;
    })
    return JSON.stringify(busca);
}

module.exports = {
    buscar,
    buscarUm,
    cadastrar,
};

