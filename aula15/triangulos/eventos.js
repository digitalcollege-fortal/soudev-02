let ladoA = prompt("Qual o lado A?");
let ladoB = prompt("Qual o lado B?"); 
let ladoC = prompt("Qual o lado C?");

if (ladoA == ladoB && ladoB == ladoC) {
    alert("equilatero");
} else if (ladoA != ladoB && ladoB != ladoC && ladoC != ladoA) {
    alert('Escaleno');
} else {
    alert('Isósceles');
}
