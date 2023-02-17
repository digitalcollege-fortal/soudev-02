let d = 1;

while (d <= 31) {
    dia.innerHTML += '<option>' + d + '</option>';

    d++;
}

let m = 0;
let meses = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];

while (m < 12) {
    mes.innerHTML += '<option>' + meses[m] + '</option>';

    m++;
}

// Para (inicio; termino; meio)
for (let a = 2023; a >= 1950; a--) {
    ano.innerHTML += '<option>' + a + '</option>';
}
