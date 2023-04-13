const database = require('../connection/database');

test('testar se a conexao funciona', async () => {
    let conexao = await database.abrirConexao('db_digital_store');

    expect(conexao).not.toBe('error');
});

test('testar se a conexao dá erro', async () => {
    let conexao = await database.abrirConexao('banco_teste_nao_existe');

    expect(conexao).toBe('error');
});
