const mysql2 = require('mysql2/promise');

async function execute(sql) {
    let conexao = await mysql2.createConnection({
        user: 'root',
        password: '1234',
        database: 'db_digital_store',
        host: 'localhost'        
    });

    //executa lá no mysql
    let [rows] = await conexao.execute(sql);

    return rows;
}

module.exports = {
    execute
};

