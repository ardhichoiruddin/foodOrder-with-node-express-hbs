const express = require('express')
const router = express.Router();
const path = require('path');
const db = require('../db');
const fs = require('fs');


router.get('/', (req, res) => {

    res.render('login');
  
});

router.post('/auth', (req, res) => {

    const username = req.body.username;
    const password = req.body.password;
    
    if (username && password) {
		db.query('SELECT * FROM user WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
			if (results.length > 0) {
			
                req.session.username = username;

                console.log( req.session.username)
                
                results.forEach((x)=>{
                    if(x.jabatan == "staff"){
                        res.redirect('/staff');
                    }
                    else if(x.jabatan == 'manajer'){
                        res.redirect('/manajer');
                    }
                    else if(x.jabatan == 'admin'){
                        res.redirect('/admin');
                    }
                })
				
			} else {
				res.send('Incorrect Username and/or Password!');
			}			
			res.end();
		});
	}
  
});




module.exports = router;