const welcome = require('../src/welcome');

test('testar se a funcao funciona sem parametro', () => {
    let resultado = welcome();

    expect(resultado).toBe('Welcome');
});

test('testar se quando eu passo um parametro a funcao retorna junto ao texto', () => {
    let resultado = welcome('Daniel');

    expect(resultado).toBe('Welcome Daniel');
});
