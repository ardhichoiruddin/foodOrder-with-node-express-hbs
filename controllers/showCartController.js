const db = require('../db');
const route = require('express').Router();

route.get('/', function(req, res){
	const query = db.query('SELECT pd.id_produk, pd.nama_produk, pd.harga_produk, pd.food_image FROM produk AS pd INNER JOIN cart AS cr ON pd.id_produk = cr.id_produk', (err, foods) => {

        if (err) throw err;

        res.send(foods);
    
    });
})

module.exports = route