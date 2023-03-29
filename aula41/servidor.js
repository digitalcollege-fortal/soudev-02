const express = require('express');

const categoriaRouter = require('./controllers/categoria/router');
const produtoRouter = require('./controllers/produto/router');
const escolaRouter = require('./controllers/escola/router');

//iniciando uma aplicacao com express
const app = express();

app.use(express.json()) 

//Colocando o express para usar o router de categoria
app.use(categoriaRouter);
app.use(produtoRouter);
app.use(escolaRouter);

app.use((req, res) => {
    res.status(404).send("Nenhuma rota encontrada")
})

const PORTA = 8000;

app.listen(PORTA, () => {
    console.log('-----------');
    console.log('-- TÁ ON --');
    console.log('-----------');
});

//arquitetura hexagonal
