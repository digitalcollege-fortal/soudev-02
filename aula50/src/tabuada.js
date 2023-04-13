function somar(n1, n2) {
    let soma = n1 + n2;  

    return Number(soma.toFixed(4));
}

function subtrair(n1, n2){
    let resultado = n1 - n2;
    return Number(resultado.toFixed(1));
} 

function dividir(n1, n2){
    if(n2 !== 0){
        let resultado = n1 / n2;
        return resultado;
    }
    return "n2 não pode ser 0";
}

function multiplicar(n1, n2){
    let resultado = n1 * n2;
    return resultado;
}

module.exports = {
    somar,
    subtrair,
    dividir,
    multiplicar
};
