if (localStorage.getItem('darkmode') === "true") {
    dark.checked = true; //marcando o input/switch

    alterarCores();
}

function alterarCores() {
    if (dark.checked) {
        document.body.classList.add('bg-dark');
        document.body.classList.add('text-white');
        // document.getElementById('tabela').classList.add('table-dark');
        tabela.classList.add('table-dark');

        document.querySelectorAll('[class="btn btn-warning"]').forEach(function (cadaBotao) {
            cadaBotao.classList.remove('btn-warning');
            cadaBotao.classList.add('btn-outline-warning');
        });

    } else {
        document.body.classList.remove('bg-dark');
        document.body.classList.remove('text-white');
        tabela.classList.remove('table-dark');

        document.querySelectorAll('[class="btn btn-outline-warning"]').forEach(function (cadaBotao) {
            cadaBotao.classList.add('btn-warning');
            cadaBotao.classList.remove('btn-outline-warning');
        });
    }
}

function ativarDarkmode() {
    if (dark.checked) {
        //salva no localStorage
        localStorage.setItem('darkmode', true);
    } else {
        localStorage.setItem('darkmode', false);
    }

    alterarCores();
}
    

/////////////////// ARRAY DE OBJETOS ///////////////////////


// let alunos = [
//     {
//         id: 1,
//         nome: "Ana kelly",
//         email: "kelly@gmail.com",
//         telefone: "00 00000-0000",
//         cidade: "Fortaleza-ce"
//     },
//     {
//         id: 2,
//         nome: "Andy Silva",
//         email: "andy@gmail.com",
//         telefone: "00 00000-0000",
//         cidade: "Fortaleza-ce"
//     },
//     {
//         id: 3,
//         nome: "Samantha kuran",
//         email: "samantha@gmail.com",
//         telefone: "00 00000-0000",
//         cidade: "Fortaleza-ce"
//     },
//     {
//         id: 4,
//         nome: "Lane Gomes",
//         email: "lane@gmail.com",
//         telefone: "00 00000-0000",
//         cidade: "Fortaleza-ce"
//     },
//     {
//         id: 5,
//         nome: "Sarah Camilo",
//         email: "kelly@gmail.com",
//         telefone: "00 00000-0000",
//         cidade: "Fortaleza-ce"
//     }
// ];



