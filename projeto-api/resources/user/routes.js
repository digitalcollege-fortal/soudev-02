const app = require("express").Router();
const database = require("../../connection/database");

app.get("/users", async (req, res) => {
    let lista = await database.execute(`
        SELECT * FROM tb_users;
    `);
    res.send(JSON.stringify(lista));
});

app.post("/users", async (req, res) => {
    let response = await database.execute(`
        INSERT INTO tb_users 
        (nome, email, senha)
        VALUES
        ('${req.body.nome}','${req.body.email}','${req.body.senha}');
    `);

    await database.execute(`
        UPDATE tb_users 
        SET token = '${req.body.senha}_${response.insertId}'
        WHERE id = ${response.insertId};
    `);
    let dados = req.body;
    dados.id = response.insertId;
    res.send(JSON.stringify(dados));
});

app.get("/users/auth", async(req, res) => {
    let users = await database.execute(`
        SELECT * FROM tb_users 
        WHERE email = '${req.headers.email}' AND senha = '${req.headers.senha}';
    `);

    if(users.length === 0){
        res.send(JSON.stringify({"message": "Usuario ou senha invalido"}))
        return;
    }

    res.send(JSON.stringify({"token": users[0].token}));
});

module.exports = app;
