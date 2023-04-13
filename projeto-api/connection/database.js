const mysql2 = require('mysql2/promise');

const DATABASE = 'db_digital_store';

async function abrirConexao(db) {
    try {
        let conexao = await mysql2.createConnection({
            user: 'root',
            password: '1234',
            database: db,
            host: 'localhost'        
        });
    
        return conexao;
    } catch (algumErro) {
        return "error";
    }
}

async function execute(sql) {
    //executa lá no mysql
    let [rows] = await abrirConexao(DATABASE).execute(sql);

    return rows;
}

module.exports = {
    execute,
    abrirConexao
};

