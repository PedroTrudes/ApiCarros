//Arquivo de configurações de uma rota
const express = require("express");
const router = express.Router();

const CarroController = require('./controllers/CarroController');

router.get('/carros', CarroController.getAll);

module.exports = router;