function alterarNome () {
    let status = document.querySelector(".status");
    // nome.classList.remove('is-invalid');
    status.classList.add("bad");
    status.classList.remove("ok");

    if (nome.value.length > 2) {
        // nome.classList.add('is-valid');
        status.classList.add("ok");
        status.classList.remove("bad");
    } else {
        // nome.classList.add('is-invalid');
        status.classList.remove("ok");
        status.classList.add("bad");
    }
}


function alterarEmail () {
    email.classList.remove('is-invalid');

    if (email.value.length > 2) {
        email.classList.add('is-valid');
    } else {
        email.classList.add('is-invalid');
    }
}


function validar() {
    //faz com que o formulario nao seja enviado
    event.preventDefault();

    // if ( document.getElementById('nome').value === '' ) {
    if ( nome.value === '' ) {
        // nome.style.borderColor = 'red';
        nome.classList.add('is-invalid');
    }

    if ( document.getElementById('email').value === '' ) {
        email.classList.add('is-invalid');
    }

    if ( document.getElementById('telefone').value === '' ) {
        telefone.classList.add('is-invalid');
    }

    if ( document.getElementById('cidade').value === '' ) {
        cidade.classList.add('is-invalid');
    }


}


