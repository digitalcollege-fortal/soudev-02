const express = require('express');
const categoria = require('./categoria'); 

//criando um router para gerenciar os endpoints
//de categoria
const app = express.Router();

app.get('/categorias', (req, res) => {
    res.send(categoria.buscar());
});

app.post('/categorias', (req, res) => {
    res.send(categoria.cadastrar());
});

//exportando todas as rotas criadas aqui 
module.exports = app;
