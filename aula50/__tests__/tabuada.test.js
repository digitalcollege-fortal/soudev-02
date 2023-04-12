const tabuada = require('../src/tabuada');

test('garante que a funcao somar retorna o valor correto', () => {
    let resultado = tabuada.somar(10, 20);

    expect(resultado).toBe(30); 
});

test('garante que a funcao consegue somar numeros negativos', () => {
    let resultado = tabuada.somar(-10, 10);

    expect(resultado).toBe(0);
});

test('garante que a funcao somar consegue lidar com numeros reais', () => {
    let resultado = tabuada.somar(2.3, 2.4);

    expect(resultado).toBe(4.7);
});

test('garante que a funcao somar consegue lidar com numeros reais maiores', () => {
    let resultado = tabuada.somar(8.355, 10.6789);

    expect(resultado).toBe(19.0339);
});
