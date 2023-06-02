//Arquivo de configurações de uma rota
const express = require("express");
const router = express.Router();

const CarroController = require('./controllers/CarroController');

router.get('/carros', CarroController.getAll);
router.get('/carro/:codigo', CarroController.getOne);
router.post('/carro', CarroController.newCarro);
router.put('/carro/update/:codigo', CarroController.updateCarro);
router.delete('/carro/delete/:codigo', CarroController.excluir)

module.exports = router;