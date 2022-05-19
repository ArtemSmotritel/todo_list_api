const { Client } = require('pg');

const client = new Client({
    user: "todolist_api",
    password: "abobus",
    host: "127.0.0.1",
    database: "my_database"
})

async function connectToDb() {
    await client.connect();
}

async function disconnectFromDb() {
    await client.end();
}

async function makeRequest(query, reqValues = []) {
    let data;
    try {
        data = await client.query(query, [...reqValues]);
    } catch (error) {
        console.log(error);
        return error;
    }

    return data;
}

module.exports = { client, connectToDb, disconnectFromDb, makeRequest };

// const knex = require('knex')({
//     client: 'pg',
//     connection: {
//         user: "todolist_api",
//         password: "abobus",
//         host: "127.0.0.1",
//         database: "my_database"
//     }
// });

//module.exports = knex;