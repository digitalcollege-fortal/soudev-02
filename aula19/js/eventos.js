function selecionar(input) {
    // document.getElementById('quantidade').innerHTML = "1";
    // document.querySelector('#quantidade').innerHTML = "1";
    // document.querySelector('[id="quantidade"]').innerHTML = "1";
    
    if (input.checked) {
        quantidade.innerHTML = "1";
    } else {
        quantidade.innerHTML = "0";
    }

    // input.checked ? quantidade.innerHTML = "1" : quantidade.innerHTML = "0";
}
