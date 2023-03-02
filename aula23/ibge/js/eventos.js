fetch('https://servicodados.ibge.gov.br/api/v1/localidades/regioes')
    .then(res => res.json())
    .then(regioes => {
        function addOption(cada) {
            select_regiao.innerHTML += `<option value="${cada.id}">${cada.nome}</option>`;
        }
        
        regioes.forEach(addOption); 
    });

function buscarEstados () {
    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/regioes/${select_regiao.value}/estados`)
        .then(res => res.json())
        .then(estados => {
            select_estado.innerHTML = "<option>-- Selecione --</option>";

            function addOption(cada) {
                select_estado.innerHTML += `<option>${cada.nome}</option>`;
            }

            estados.forEach(addOption);
        });
}

