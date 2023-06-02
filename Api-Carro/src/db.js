const mysql = require('mysql2');//npm un mysql && npm i mysql2 pois o mysql nao deixa criar a connection com o banco de dados


const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

connection.connect((error) => {
    if(error) throw error;
    console.log(`Conectado ao banco de dados: ${process.env.DB_NAME}`)     
});

module.exports = connection;