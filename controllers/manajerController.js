
const express = require('express')
const router = express.Router();
const db = require('../db');


router.get('/', (req,res) => {
    res.render("manajer")
});

router.get('/bulan', (req,res) => {
    const query = db.query("SELECT p.nama_produk, t.quantity, t.tanggal, t.total_harga FROM transaksi AS t INNER JOIN produk AS p ON p.id_produk = t.id_produk WHERE t.status = 'disetujui' ", (err, foods) => {


        if (err) throw err;

        res.render('manajerTableBulan',{
            foods
        });
    
    });

});

router.get('/bulan/hari', (req,res) => {
    res.render("manajerTableBulanhari")
});

module.exports = router;