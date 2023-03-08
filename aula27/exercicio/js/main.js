// import listar from "./listar.js";
// import listar from "./listar.js";
// import listar from "./listar.js";

function alterarConteudo(x) {
    // if (x === 'listar') {
    //     alert(listar());
    // } else if (x === 'cadastro') {
    //     alert(cadastro());
    // } else if (x === 'relatorio') {
    //     alert(relatorio());
    // }

    //vai atualizar a DIV#conteudo com o retorno da funcao
    conteudo.innerHTML = window[x]();
}

