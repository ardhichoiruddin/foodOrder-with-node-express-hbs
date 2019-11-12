const express = require('express')
const router = express.Router();
const path = require('path');
const multer = require('multer');
const db = require('../db');
const fs = require('fs');
const bcrypt = require('bcrypt');


// Manajemen User
router.get('/', (req, res) => {

  const querys = db.query("SELECT * FROM user", (err, users) => {
    if (err) throw err;
    res.render('admin', {
      title: "Manajemen User",
      users
    });

  });

});

// Food Menu
// Set The Storage Engine
const storage = multer.diskStorage({
  destination: 'public/uploads/',
  filename: function(req, file, cb){
    cb(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({
  storage: storage,
  limits:{fileSize: 1000000}
});

router.get('/foodmenu', (req, res) => {


  const querys = db.query("SELECT * FROM produk", (err, foods) => {
    if (err) throw err;
    res.render('admin-foodmenu', {
      title: "Food Menu",
      foods
    });

  });

});

// Select with id
router.get('/foodmenu/:id', (req, res) => {

  const query = db.query("SELECT * FROM produk WHERE id_produk = " + req.params.id, (err, foods) => {

    if (err) throw err;
    res.render('admin-foodmenu-edit',{
      foods
    })
  });

});

// Update
router.post('/foodmenu/update/:id', (req, res) => {

  const nama = req.body.nama;
  const kategori = req.body.kategori;
  const harga = req.body.harga;

  const query = db.query("UPDATE produk SET nama_produk='"+ nama +"',kategori='"+ kategori +"', harga_produk='"+ harga +"' WHERE id_produk= " + req.params.id, (err, foods) => {

    if (err) throw err;

    res.redirect('/admin/foodmenu');

  });

});

// Delete
router.get('/foodmenu/delete/:id', (req, res)=>{

  const query = db.query("DELETE FROM produk WHERE id_produk=" + req.params.id, (err, foods) => {

    if (err) throw err;

    res.redirect('/admin/foodmenu');

  });

});

// ---------------------------------------------------------------------    

router.post('/foodmenu/tambah-menu', upload.single('upload_gambar'),(req, res, next) => {

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

// Get for update
router.get('/:id', (req, res) => {

  const query = db.query("SELECT * FROM user WHERE id_user = " + req.params.id, (err, users) => {

    if (err) throw err;
    res.render('admin-edit',{
      users
    });

  });

});

// Update
router.post('/update/:id', (req, res) => {

  const nama = req.body.nama;
  const username = req.body.username;
  const jabatan = req.body.jabatan;

  const query = db.query("UPDATE user SET nama_user='"+ nama +"', username='"+ username +"', jabatan='"+ jabatan +"' WHERE id_user= " + req.params.id, (err, foods) => {

    if (err) throw err;

    res.redirect('/admin');

  });

});

// Delete
router.get('/delete/:id', (req, res)=>{

  const query = db.query("DELETE FROM user WHERE id_user=" + req.params.id, (err, foods) => {

    if (err) throw err;

    res.redirect('/admin');

  });

});

// Add
router.post('/admin/tambah-data',(req, res)=>{

  var newUser = {
    nama_user : req.body.nama,
    username : req.body.username,
    jabatan : req.body.jabatan,
    password : req.body.password
  }

  const query = db.query("INSERT INTO user set ?", newUser, (err, users) => {
    if (err) throw err;
    res.redirect('/admin');

  });

})




module.exports = router;