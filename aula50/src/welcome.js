function welcome(nome = '') {
    if (nome !== '') {
        return "Welcome " + nome;
    }

    return "Welcome";
}

module.exports = welcome;
