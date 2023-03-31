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

async function create(data){
    let sql = await db.execute(`
        INSERT INTO ${table} (nome) VALUES ('${data.nome}');
    `);
    let category = await db.execute(`
        SELECT * FROM ${table} WHERE ${sql.insertId};
    `);
    return JSON.stringify(category[0]);
}

async function edit(id, data){
    let query = "";
    if(data.nome){
        query = `nome = '${data.nome}',`;
    }
    if(data.status){
        query += `status = ${data.status},`;
    }
    query += `updated_at = '${data.updated_at}'`;
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
    create,
    edit
}
