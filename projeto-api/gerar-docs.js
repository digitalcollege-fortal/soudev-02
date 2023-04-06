const autogen = require('swagger-autogen');

const arquivoSaida = './docs.json';
const endpoints = ['./server.js'];
// const endpoints = ['./banners/router.js', './users/router.js']

autogen(arquivoSaida, endpoints);

//para executar
//node gerar-docs.js
