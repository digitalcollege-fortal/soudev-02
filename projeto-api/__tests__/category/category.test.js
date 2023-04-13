const controller = require('../../resources/category/controller');
const routes = require('../../resources/category/routes');

test('testando endpoint buscarTodos', async () => {
    let resultado = await controller.listAll();
    expect(typeof JSON.parse(resultado)).toBe('object');
})

test('testando controller listarUm', async () => {
    let resultado = JSON.parse(await controller.listOne(1));
    expect(typeof resultado).toBe('object');
    expect(typeof resultado.id).toBe('number');
    expect(typeof resultado.nome).toBe('string');
    expect(typeof resultado.status).toBe('number');
    expect(typeof resultado.created_at).toBe('string');
})

// test('testando a rota listarUm', async () => {
//     let resultado = JSON.parse(await routes.get('/categories/a'));
//     expect(resultado).toBe("Unknown column 'a' in 'where clause'")
// })

test('testando se esta inserindo na tabela', async () => {
    let dados = {
        nome: 'teste',
        status: 1,
    }
    let resultado = JSON.parse(await controller.create(JSON.stringify(dados)));
    expect(typeof resultado).toBe('object');
    expect(typeof resultado.id).toBe('number');
})

test('testando se esta deletando', async () => {
    await controller.destroy(1);
    let resultado = JSON.parse(await controller.listOne(1));
    expect(resultado.status).toBe(2);
})
