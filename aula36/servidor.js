const produto = require('./controllers/produto');
const categoria = require('./controllers/categoria');
const cliente = require('./controllers/cliente');

//importando diretamente do node
const http = require('http');

const PORTA = 8000;
const ENDERECO = 'localhost';

//essa funcao vai sempre ser executada 
//quando alguma requisicao foi feita ao servidor
function recepcao(req, res) {
    let resposta = "Pagina nao encontrada";

    // let routes = {
    //     '/clientes': {
    //         'GET': cliente.buscar,
    //         'POST': cliente.cadastrar,
    //     },
    //     '/produtos': {
    //         'GET': produto.buscar,
    //         'POST': produto.cadastrar,
    //     }
    // }

    // if (routes[req.url] !== undefined) {
    //     resposta = routes[req.url][req.method]();
    // }

    // switch(req.url){
    //     case "/clientes":
    //         resposta = cliente.buscar();
    //     break;
    //     case "/produtos":
    //         if (req.method === 'GET') {
    //             resposta = produto.buscar();
    //         } else if (req.method === 'POST') {
    //             resposta = produto.cadastrar();
    //         }

    //         break;
    //     case "/categorias":
    //         resposta = categoria.buscar();
    //     break;

    // }
    res.end(resposta);
}

//criando o servidor e colocando 
//ele pra escutar as requisicoes
http.createServer(recepcao).listen(PORTA, ENDERECO, () => {
    console.log('--------------------');
    console.log('--  A veia tá ON  --');
    console.log('--------------------');
});


