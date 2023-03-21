const produto = require('./produto');
const categoria = require('./categoria');
const cliente = require('./cliente');

//importando diretamente do node
const http = require('http');

const PORTA = 8000;
const ENDERECO = 'localhost';

//essa funcao vai sempre ser executada 
//quando alguma requisicao foi feita ao servidor
function recepcao(req, res) {
    let resposta = "Pagina nao encontrada";

    if (req.url === "/clientes") {
        resposta = cliente.buscar();
    } else if (req.url === '/produtos') {
        resposta = produto.buscar();
    }

    res.end(resposta);
}

//criando o servidor e colocando 
//ele pra escutar as requisicoes
http.createServer(recepcao).listen(PORTA, ENDERECO, () => {
    console.log('--------------------');
    console.log('--  A veia tá ON  --');
    console.log('--------------------');
});
