
const express = require('express')
const router = express.Router();


router.get('/', (req,res) => {
    res.render("staff")
});

router.get('/diterima', (req,res) => {
    res.render("staffTerima")
});

module.exports = router;