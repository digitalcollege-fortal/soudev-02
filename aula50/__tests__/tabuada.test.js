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

test('garante que a função subtrair esta funcionando', () =>{
    let resultado = tabuada.subtrair(6, 5);
    expect(resultado).toBe(1);
})

test('garante que a função subtrair esta funcionando com numeros quebrados', () =>{
    let resultado = tabuada.subtrair(6.9, 4.2);
    expect(resultado).toBe(2.7);
})

test('testando a divisao', () => {
    let resultado = tabuada.dividir(4,2);
    expect(resultado).toBe(2);
})

test('testando a divisao por 0', () => {
    let resultado = tabuada.dividir(4,0);
    expect(resultado).toBe("n2 não pode ser 0");
})

test('testando multiplicação', () => {
    let resultado = tabuada.multiplicar(3,5);
    expect(resultado).toBe(15);
})
