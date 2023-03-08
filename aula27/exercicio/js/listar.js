function item(texto) {
    return `<li style="color: red;">${texto}</li>`;
}

function listar() {
    return `
        <hr>
        <ul>
            ${item('Maria')}
            ${item('Joao')}
            ${item('Zezinha')}
        </ul>
    `;
    
}
