function buscarCEP() {

    fetch (`http://viacep.com.br/ws/${cep.value}/json`)
        .then(res => res.json())
        .then(json => {
            logradouro.value = json.logradouro;
            bairro.value = json.bairro;
            cidade.value = json.localidade;
            uf.value = json.uf;
        });


    // fetch(`http://viacep.com.br/ws/${cep.value}/json`) //vai lá  buscar o dinheiro
    //     .then(function (resposta) {
    //         return resposta.json();
    //     }) //a Samantha volta com o dinheiro, e a gente pega so o que interessa
    //     .then(function (conteudo) {
    //         // document.getElementById('logradouro').value = "Av Santos Dummon";
    //         logradouro.value = conteudo.logradouro;
    //         bairro.value = "Good Garden";
    //         cidade.value = "Caucaia";
    //         uf.value = "CE";
    //     }); //aqui a gente usa o dinheiro pra comprar cachaça



}

