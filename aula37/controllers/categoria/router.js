const express = require('express');
const categoria = require('./categoria'); 

//criando um router para gerenciar os endpoints
//de categoria
const app = express.Router();

app.get('/categorias', (req, res) => {
    res.send(categoria.buscar());
});

app.get('/categorias/:id', (req, res) => {
    res.send(categoria.buscarUm(req.params.id));
});

app.post('/categorias', (req, res) => {
    res.send(categoria.cadastrar(req.body));
});

app.post('/categorias/:id', (req, res) => {
    res.send(categoria.editar(req.params.id, req.body))
})

app.delete('/categorias/:id', (req, res) => {
    res.send(categoria.deletar(req.params.id));
});

//exportando todas as rotas criadas aqui 
module.exports = app;

