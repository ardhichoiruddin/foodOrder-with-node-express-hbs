const db = require('../db');
const route = require('express').Router();


route.get('/:id', (req, res)=>{

    const query = db.query(`INSERT INTO cart(id_produk) VALUES(${req.params.id})`, (err) => {

        if (err) throw err;
    
    });

});

route.get('/delete/:id', (req, res)=>{
	const query = db.query(`DELETE FROM cart WHERE id_produk = ${ req.params.id }`,(err)=>{
		if (err) throw err;
	})
})

route.post('/tambahtrans',(req, res, next) => {


  const query = db.query("INSERT INTO transaksi set ?", req.body, (err) => {

    if (err) throw err;

    res.redirect('/order');

  })

});

module.exports = route