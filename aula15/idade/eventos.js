let idade = prompt("Ola, qual a sua idade?");

alert("Que legal, vc tem " + idade);

if (idade < 14) {
    alert("voce é uma criança");
} else if (idade < 18) {
    alert("Adolescente");
} else if (idade < 60) {
    alert("Adulto");
} else {
    alert("Idoso");
}
