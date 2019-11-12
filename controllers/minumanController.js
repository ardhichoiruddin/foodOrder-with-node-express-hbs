const db = require('../db');

module.exports =(req, res)=>{

    const query = db.query("SELECT * FROM produk WHERE kategori = 'minuman' ", (err, foods) => {

        if (err) throw err;
        res.render('foodMenu',{
            title : "Minuman",
            foods
        });
    
    });

}