const express = require('express');

const categoriaRouter = require('./controllers/categoria/router');

//iniciando uma aplicacao com express
const app = express();

//Colocando o express para usar o router de categoria
app.use(categoriaRouter);

const PORTA = 8000;

app.listen(PORTA, () => {
    console.log('-----------');
    console.log('-- TÁ ON --');
    console.log('-----------');
});
