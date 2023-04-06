// const { event } = require("cypress/types/jquery");

function listarTodos(){
    fetch('http://localhost:8000/banners')
    .then(res => res.json())
    .then(dados => {
        tabela_banners.innerHTML = "";
        dados.map(cada => {
            tabela_banners.innerHTML += `
                <tr>
                    <td>${cada.id}</td>
                    <td>${cada.titulo}</td>
                    <td>${cada.descricao}</td>
                    <td>
                        <img width="100px" src="${cada.imagem}">
                    </td>
                    <td>
                        <button>Editar</button>
                        <button onclick="remover('${cada.id}')">Excluir</button>
                    </td>
                </tr>
            `;  
        })
    });
} listarTodos();


function adicionar()
{
    event.preventDefault();
    let banner = {
        titulo: titulo.value,
        descricao: descricao.value,
        imagem: imagem.value
    }

    fetch('http://localhost:8000/banners/', {
        headers:{
            'Content-type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(banner)
    })
    .then(res => res.json())
    .then(() => {
        listarTodos();
    })

}

function remover(id) {
    fetch('http://localhost:8000/banners/'+id, {
        method: 'DELETE'
    });

    alert('Pronto, banner excluido');
    location.href="banners.html";
}
