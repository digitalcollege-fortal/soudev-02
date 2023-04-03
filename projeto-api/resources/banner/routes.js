// const express = require('express');
// const app = express.Router();

const app = require('express').Router();
const database = require('../../connection/database');

app.get('/banners', async (req, res) => {
    let dados = await database.execute(`SELECT * FROM tb_banner`);

    res.send(dados);
});

app.get('/banners/:id', async (req, res) => {
    let dados = await database.execute(`
        SELECT * FROM tb_banner WHERE id='${req.params.id}'
    `);

    res.send(dados[0]);
});

app.post('/banners', async (req, res) => {
    let corpo = req.body;

    let sql = await database.execute(`
        INSERT INTO tb_banner (titulo, descricao, imagem)
        VALUES ('${corpo.titulo}', '${corpo.descricao}', '${corpo.imagem}')
    `);

    corpo.id = sql.insertId;
    
    res.send(corpo);
});

app.put('/banners/:id', async (req, res) => {
    let dados = req.body;

    await database.execute(`
        UPDATE tb_banner SET
            titulo='${req.body.titulo}',
            descricao='${req.body.descricao}',
            imagem='${req.body.imagem}'
        WHERE id='${req.params.id}'
    `);

    dados.id = req.params.id;

    res.send(dados);
});

app.delete('/banners/:id', async (req, res) => {
    await database.execute(`DELETE FROM tb_banner WHERE id='${req.params.id}'`)

    res.sendStatus(204);
});



module.exports = app;
