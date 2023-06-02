const CarroService = require('../services/CarroService');//escutando o arquivo service

module.exports = {
    getAll: async (req, res) => {
        let json = {error: '', result:[]};
        let carros = await CarroService.getAll();
        for (let i in carros){
            json.result.push({
                codigo: carros[i].codigo,
                descricao: carros[i].modelo,
                placa: carros[i].placa
            });
        }
        res.json(json)
    }
}