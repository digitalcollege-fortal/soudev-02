const repository = require('../../resources/banner/repository');

test('Testar se inserir banner na tabela funciona', async () => {
    let dados = {
        titulo: 'Titulo Banner teste',
        descricao: 'Descricao teste para o banner',
        imagem: 'http://imagens.com.br/4.jpg'
    };

    let resultado = await repository.inserir(dados);

    expect(resultado).toBeGreaterThan(0); //espero que seja maior que 0
    expect(typeof resultado).toBe('number');
});

test('Testar se consigo adicionar um banner sem titulo', async () => {
    let dados = {
        descricao: 'bla bla',
        imagem: 'foto.jpg'
    };

    let resultado = await repository.inserir(dados);

    expect(resultado).toBe('invalid_title');
});

test('Testar se consigo adicionar um banner sem descricao', async () => {
    let dados = {
        titulo: 'bla bla',
        imagem: 'foto.jpg'
    };

    let resultado = await repository.inserir(dados);

    expect(resultado).toBe('invalid_description');
});

test('Testar se consigo adicionar um banner sem imagem', async () => {
    let dados = {
        titulo: 'bla bla',
        descricao: 'descricao teste'
    };

    let resultado = await repository.inserir(dados);

    expect(resultado).toBe('invalid_image');
});

// test('testar se o buscar traz um array de elementos', async () => {
//     let resultado = await repository.buscarTodos();

//     expect(typeof resultado).toBe('array');
// })
