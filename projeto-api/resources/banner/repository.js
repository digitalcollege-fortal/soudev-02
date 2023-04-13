const database = require('../../connection/database');

async function inserir (dados) {
    if (!dados.titulo) {
        return "invalid_title";
    }

    if (!dados.descricao) {
        return "invalid_description";
    }

    let sql = await database.execute(`
        INSERT INTO tb_banner (titulo, descricao, imagem)
        VALUES ('${dados.titulo}', '${dados.descricao}', '${dados.imagem}')
    `);

    return sql.insertId;
}

module.exports = {
    inserir,
}

