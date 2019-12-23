
const express = require('express')
const router = express.Router();
const db = require('../db');


router.get('/', (req,res) => {

    const querys = db.query("SELECT p.nama_produk, p.food_image, p.harga_produk, t.id_transaksi, t.nama_pemesan, t.quantity, t.total_harga, t.nomor_meja, t.total_harga FROM produk AS p INNER JOIN transaksi AS t ON p.id_produk = t.id_produk AND t.status = 'menunggu'", (err, foods) => {
	    if (err) throw err;
	    res.render('staff', {
	      title: "Menunggu",
	      foods
	    });

	});
});

router.get('/diterima', (req,res) => {

    const querys = db.query("SELECT p.nama_produk, p.food_image, p.harga_produk, t.id_transaksi, t.quantity, t.total_harga, t.nomor_meja, t.total_harga FROM produk AS p INNER JOIN transaksi AS t ON p.id_produk = t.id_produk AND t.status = 'disetujui'", (err, foods) => {
	    if (err) throw err;
	    res.render('staffTerima', {
	      title: "Diterimah",
	      foods
	    });

	});
});

router.get('/ditolak', (req,res) => {

    const querys = db.query("SELECT p.nama_produk, p.food_image, p.harga_produk, t.id_transaksi, t.quantity, t.total_harga, t.nomor_meja, t.total_harga FROM produk AS p INNER JOIN transaksi AS t ON p.id_produk = t.id_produk AND t.status = 'ditolak'", (err, foods) => {
	    if (err) throw err;
	    res.render('staffTolak', {
	      title: "Ditolak",
	      foods
	    });

	});
});


router.get('/setujui/:id', (req, res)=>{

	const querys = db.query(`UPDATE transaksi SET status = 'disetujui' WHERE id_transaksi = ${ req.params.id }` , (err, foods) => {
	    if (err) throw err;
	    res.redirect('/staff');

	});

})

router.get('/ditolak/:id', (req, res)=>{

	const querys = db.query(`UPDATE transaksi SET status = 'ditolak' WHERE id_transaksi = ${ req.params.id }` , (err, foods) => {
	    if (err) throw err;
	    res.redirect('/staff');

	});

})



module.exports = router;