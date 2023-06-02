//todos os comando de mysql vão ficar aqui
const db = require('../db');
module.exports = {
    getAllService: () => {
        return new Promise((eceito, rejeitado) => {
            db.query('SELECT * FROM carros', (error, results) => {
                if(error) {rejeitado(error); return; }
                eceito(results)
            })
        })
    },

    getOneService: (codigo) => {
        return new Promise((aceito, rejeitado) => {
            db.query('SELECT * FROM carros WHERE codigo = ?', [codigo], (error, results) => {
                if(error) {rejeitado(error); return;}
                if(results.length > 0) {
                    aceito(results[0]);0000000000000
                }else{
                    aceito(false);
                }
            })
        })
    },

    inserirCarroService: (modelo, placa) => {
        return new Promise((aceito, rejeitado) => {

            db.query('INSERT INTO carros (modelo, placa) VALUES (?, ?)', 
            [modelo, placa], 
            (error, results) => {
                if(error) {rejeitado(error); return; }
                aceito(results.insertId);
            });
        });
    },

    alterarService: (codigo, modelo, placa) => {
        return new Promise((aceito, rejeitado) =>{
            db.query('UPDATE carros SET modelo = ?, placa= ? WHERE codigo = ?',[modelo, placa, codigo],
            (error, results) =>{
                if(error) {rejeitado(error); return;}
                aceito(results);
            })
        })
    },

    excluirService: (codigo) => {
        return new Promise((aceito, rejeitado) => {
            db.query('DELETE FROM carros WHERE codigo = ?',[codigo],
            (error, results) => {
                if(error) {rejeitado(error); return;}
                aceito(results);
            })

        })
    }
};