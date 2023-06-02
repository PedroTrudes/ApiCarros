const CarroService = require('../services/CarroService');//escutando o arquivo service

module.exports = {
    getAll: async (req, res) => {
        let json = {error: '', result:[]};
        let carros = await CarroService.getAllService();
        for (let i in carros){
            json.result.push({
                codigo: carros[i].codigo,
                descricao: carros[i].modelo,
                placa: carros[i].placa
            });
        }
        res.json(json)
    },

    getOne: async (req, res) => {
        let json = {error: '', result: []};
        let codigo = req.params.codigo;
        let carro = await CarroService.getOneService(codigo);

        if(carro){
            json.result = carro;
        }

        res.json(json);
    },

    newCarro: async (req, res) => {
        let json = {error: '', result: {}};
        let modelo = req.body.modelo;
        let placa = req.body.placa;

        if(modelo && placa){
            let CarroCodigo = await CarroService.inserirCarroService(modelo, placa);
            json.result = {
                codigo: CarroCodigo,
                modelo, 
                placa
            }
        }else{
            json.error = "Campos não foram preenchidos"
        }
        res.json(json)
    },

    updateCarro: async (req, res) => {
        let json = {error: '', result: {}};
        let codigo = req.params.codigo;
        let modelo = req.body.modelo;
        let placa = req.body.placa

        if(codigo && modelo && placa) {
            await CarroService.alterarService(codigo, modelo, placa);
            json.result = {
                codigo,
                modelo,
                placa
            }
        }else{
            json.error = "Campos não foram preenchidos"
        }
        res.json(json);
    },

    excluir: async(req,res) => {
        let json = {error: '', result: {}};
        let codigo = req.params.codigo
        await CarroService.excluirService(codigo);
        res.json(json)
    }
}