const users = [
    "usuario 1", 
    "usuario 2", 
    "usuario3"];

function createUser(){
    console.log("usuario criado")
}

function updateUser(){
    console.log("usuario atualizado")
}

function listUser(){
    return "lista de usuarios";
}

function deleteUser(){
    console.log("usuario deletado")
}

module.exports = {
    users,
    createUser,
    updateUser,
    listUser,
    deleteUser
};
