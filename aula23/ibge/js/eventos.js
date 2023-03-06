document.querySelector(".bloqueio").classList.add("aparece");
fetch('https://servicodados.ibge.gov.br/api/v1/localidades/regioes')
    .then(res => res.json())
    .then(regioes => {
        document.querySelector(".bloqueio").classList.remove("aparece");
        function addOption(cada) {
            select_regiao.innerHTML += `<option value="${cada.id}">${cada.nome}</option>`;
        }
        
        regioes.forEach(addOption); 
    });

function buscarEstados () {
    document.querySelector(".bloqueio").classList.add("aparece");
    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/regioes/${select_regiao.value}/estados`)
        .then(res => res.json())
        .then(estados => {
            document.querySelector(".bloqueio").classList.remove("aparece");
            select_estado.innerHTML = "<option>-- Selecione --</option>";
            select_cidade.innerHTML = "<option>-- Selecione --</option>";
            function addOption(cada) {
                select_estado.innerHTML += `<option value='${cada.id}'>${cada.nome}</option>`;
            }

            estados.forEach(addOption);
        });
}

function buscarCidades () {
    document.querySelector(".bloqueio").classList.add("aparece");
    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${select_estado.value}/municipios`)
        .then(res => res.json())
        .then(cidades => {
            document.querySelector(".bloqueio").classList.remove("aparece");
            select_cidade.innerHTML = "<option>-- Selecione --</option>";

            function addOption(cada) {
                select_cidade.innerHTML += `<option value='${cada.id}'>${cada.nome}</option>`;
            }

            cidades.forEach(addOption);
        });
}
