const controller = require('../../resources/category/controller');
const routes = require('../../resources/category/routes');

test('testando endpoint buscarTodos', async () => {
    let resultado = await controller.listAll();
    expect(typeof JSON.parse(resultado)).toBe('object');
})

test('testando endpoint listarUm', async () => {
    let resultado = JSON.parse(await controller.listOne(1));
    expect(typeof resultado).toBe('object');
    expect(typeof resultado.id).toBe('number');
    expect(typeof resultado.nome).toBe('string');
    expect(typeof resultado.status).toBe('number');
    expect(typeof resultado.created_at).toBe('string');
})
