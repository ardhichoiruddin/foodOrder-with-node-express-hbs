
const express = require('express')
const router = express.Router();


router.get('/', (req,res) => {
    res.render("manajer")
});

router.get('/bulan', (req,res) => {
    res.render("manajerTableBulan")
});

router.get('/bulan/hari', (req,res) => {
    res.render("manajerTableBulanhari")
});

module.exports = router;