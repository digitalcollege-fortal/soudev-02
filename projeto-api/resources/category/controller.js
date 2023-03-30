const db = require("../../connection/database");
const table = "tb_category"; 

async function listAll(){
    let lista = await db.execute(`
        SELECT * FROM ${table};
    `);
    return JSON.stringify(lista);
}

async function listOne(id){
    let lista = await db.execute(`
        SELECT * FROM ${table} WHERE ${id};
    `);
    return JSON.stringify(lista[0]);
}

async function edit(id, data){
    let query = "";
    if(data.nome){
        query = `nome = '${data.nome}'`
    }
    if(data.status){
        query += `, status = ${data.status}`
    }
    await db.execute(`
        UPDATE ${table} SET ${query} WHERE ${id};
    `);
    let lista = await db.execute(`
        SELECT * FROM ${table} WHERE ${id};
    `);
    return JSON.stringify(lista[0]);
}

module.exports ={
    listAll,
    listOne,
    edit
}
