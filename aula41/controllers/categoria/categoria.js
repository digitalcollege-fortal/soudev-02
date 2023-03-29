let categorias = require("./model");

function cadastrar(dados) {
    categorias.push(dados);
    return JSON.stringify(dados);
}

function buscar() {
    let lista = categorias.filter((cada) => {
        return cada.status < 3;
    })
    return JSON.stringify(lista);
}

function buscarUm(id) {
    let busca = categorias.filter((cada) => {
        return cada.id == id;
    })
    return JSON.stringify(busca);
}

function editar(id, corpo){
    categorias.forEach((cada) => {
        if(cada.id == id){
            cada.nome = corpo.nome;
            cada.status = corpo.status;
        }
    });
}

function deletar(id){
    let novaLista = categorias.filter((cada) => {
        return cada.id != id;
    });
    categorias = novaLista;
}

module.exports = {
    buscar,
    buscarUm,
    cadastrar,
    editar,
    deletar
};

