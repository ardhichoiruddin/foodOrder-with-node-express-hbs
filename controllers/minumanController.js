const db = require('../db');
const route = require('express').Router();

route.get('/', (req, res)=>{
    // get all product

    const query = db.query("SELECT * FROM produk WHERE kategori = 'minuman' ", (err, foods) => {

        if (err) throw err;
        res.render('foodMenu',{
            title : "Minuman",
            foods
        });
    
    });

});


route.get('/cart/:id', (req, res)=>{

    const query = db.query("SELECT * FROM produk WHERE id_produk = " + id , (err, foods) => {

        if (err) throw err;
        
        res.send(foods)
    
    });

})

module.exports = route