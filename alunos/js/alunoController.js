//READ
function listarAlunos(){

    let alunos = JSON.parse(localStorage.getItem('alunos')) || [];

    let tabela = document.getElementById("tabela-body");
    tabela.innerHTML = "";
    alunos.forEach((aluno, key) => {
        tabela.innerHTML += `<tr>
                                <td>${key}</td>
                                <td>${aluno.nome}</td>
                                <td>${aluno.email}</td>
                                <td>${aluno.telefone}</td>
                                <td>${aluno.cidade}</td>
                                <td>
                                    <button class="btn btn-warning">Editar</button>
                                    <button class="btn btn-danger" onClick="deletarAluno(${key})">Excluir</button>
                                </td>
                            </tr>`;
    })
}

//CREATE
function salvarAluno(){
    event.preventDefault();
    let alunos = JSON.parse(localStorage.getItem('alunos')) || [];
    let aluno = {
        nome: nome.value,
        email: email.value,
        telefone: telefone.value,
        cidade: cidade.value
    } 
    alunos.push(aluno);
    localStorage.setItem('alunos', JSON.stringify(alunos));
    alert("Salvo com Sucesso!");

}

//UPDATE
function atualizarAluno(){}

//DELETE
function deletarAluno(id){
    let alunos = JSON.parse(localStorage.getItem('alunos')) || [];
    let alunosAtualizado = [];

    alunos.forEach((aluno, key) => {
        if(id != key){
            alunosAtualizado.push(aluno);
        }
    });

    localStorage.setItem('alunos', JSON.stringify(alunosAtualizado));

    alert("Excluido com sucesso!");

    listarAlunos();
}

