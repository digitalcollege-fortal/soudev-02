//importando o express
const express = require('express');


//criando o app para adicionar as novas rotas/endpoints
const app = express.Router();

//criando uma rota do tipo GET para buscar todas as escolas
app.get('/escolas', async (req, res) => {

   

    res.send(rows);
});



//exportando todas as rotas criadas nesse arquivo
module.exports = app;
