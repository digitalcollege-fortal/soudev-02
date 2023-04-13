const iconv = require('../node_modules/mysql2/node_modules/iconv-lite/lib');
iconv.encodingExists('foo');

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
    let conexao = await abrirConexao(DATABASE);

    //executa lá no mysql
    let [rows] = await conexao.execute(sql);

    return rows;
}

module.exports = {
    execute,
    abrirConexao
};

