function calcularMedia(notas) {
    let total = notas[0] + notas[1] + notas[2] + notas[3];

    let media = total/4;

    return media.toFixed(1);
}

let mediaG = calcularMedia([10, 9.5, 9, 9.8]);
alert("Media do Gleidson: " + mediaG);

let mediaA = calcularMedia([9, 7, 6.8, 9]);
alert("Media do Ale: " + mediaA);

let mediaM = calcularMedia([10, 8, 9, 10]);
alert("Media da Maritana: " + mediaM);



// let notas = [
//     10,
//     9,
//     8.5,
//     9.8,
// ];

// let total = notas[0] + notas[1] + notas[1] + notas[2] + notas[3];

// alert(total/5);

// let notasG = [
//     10,
//     9.8,
//     9.6,
//     10,
// ];

// let totalG = notasG[0] + notasG[1] +notasG[1] + notasG[2] + notasG[3];

// alert(totalG/5);

