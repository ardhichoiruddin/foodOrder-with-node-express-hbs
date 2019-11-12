const express = require('express')
const router = express.Router();
const path = require('path');
const multer = require('multer');
const db = require('../db');
const fs = require('fs');

// Food Menu
// Set The Storage Engine
const storage = multer.diskStorage({
    destination: 'public/uploads/',
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({
    storage: storage,
    limits: { fileSize: 1000000 }
});

router.get('/', (req, res) => {


    const querys = db.query("SELECT * FROM produk", (err, foods) => {
        if (err) throw err;
        res.render('admin-foodmenu', {
            title: "Food Menu",
            foods
        });

    });

});

// Select with id
router.get('/:id', (req, res) => {

    const query = db.query("SELECT * FROM produk WHERE id_produk = " + req.params.id, (err, foods) => {

        if (err) throw err;
        res.render('admin-foodmenu-edit', {
            foods
        })
    });

});

// Update
router.post('/update/:id', (req, res) => {

    const nama = req.body.nama;
    const kategori = req.body.kategori;
    const harga = req.body.harga;

    const query = db.query("UPDATE produk SET nama_produk='" + nama + "', kategori='" + kategori + "', harga_produk='" + harga + "' WHERE id_produk= " + req.params.id, (err, foods) => {

        if (err) throw err;

        res.redirect('/admin/foodmenu');

    });

});

// Delete
router.get('/delete/:id', (req, res) => {

    const query = db.query("DELETE FROM produk WHERE id_produk=" + req.params.id, (err, foods) => {

        if (err) throw err;

        res.redirect('/admin/foodmenu');

    });

});

// ---------------------------------------------------------------------    

router.post('/tambah-menu', upload.single('upload_gambar'), (req, res, next) => {

    var newProduk = {
        nama_produk: req.body.nama,
        kategori: req.body.kategori,
        harga_produk: req.body.harga,
        food_image: req.file.filename
    }

    console.log(req.file)

    const query = db.query("INSERT INTO produk set ?", newProduk, (err, users) => {
        if (err) throw err;
        res.redirect('/admin/foodmenu');

    })

});


module.exports = router;