//todos os comando de mysql vão ficar aqui
const db = require('../db');
module.exports = {
    getAll: () => {
        return new Promise((eceito, rejeitado) => {
            db.query('SELECT * FROM carros', (error, results) => {
                if(error) {rejeitado(error); return; }
                eceito(results)
            })
        })
    }
};