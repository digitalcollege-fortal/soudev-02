const express = require('express');

const categoriaRouter = require('./controllers/categoria/router');
const produtoRouter = require('./controllers/produto/router');

//iniciando uma aplicacao com express
const app = express();

//Colocando o express para usar o router de categoria
app.use(categoriaRouter);
app.use(produtoRouter);

const PORTA = 8000;

app.listen(PORTA, () => {
    console.log('-----------');
    console.log('-- TÁ ON --');
    console.log('-----------');
});

//arquitetura hexagonal
