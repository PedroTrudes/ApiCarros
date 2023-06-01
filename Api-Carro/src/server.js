//Criando as configurações de servidor
require("dotenv").config({path: 'variaveis.env'});
const express = require('express');
const cors = require('cors');//recurso para liberar o acesso de outros lugares
const bodyParser = require('body-parser');//converte o body de uma request em outros formatos

const routes = require('./routes');//onde vão estar as rotas do servidor
const server = express();
server.use(cors());
server.use(bodyParser.urlencoded({extended: false}));

server.listen(process.env.PORT, ()=>{
    console.log(`Hello Word, server rodando em htpp://localhost:${process.env.PORT}`);
})
