let idade = prompt("Ola, qual a sua idade?");

alert("Que legal, vc tem " + idade);

if (idade < 14) {
    alert("voce é uma criança");
}

if (idade >= 14 && idade < 18) {
    alert("você é adolescente");
}

if (idade >= 18 && idade < 60) {
    alert("voce é adulto");
}

if (idade >= 60) {
    alert('Idoso');
}
