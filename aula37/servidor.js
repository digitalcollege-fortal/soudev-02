const express = require('express');

const categoriaRouter = require('./controllers/categoria/router');
const produtoRouter = require('./controllers/produto/router');

//iniciando uma aplicacao com express
const app = express();

app.use(express.json()) 

// app.use((req, res, next) => {

// })

//Colocando o express para usar o router de categoria
app.use(categoriaRouter);
app.use(produtoRouter);

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
