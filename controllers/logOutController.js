const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {

    if (req.session) {
        // delete session object
        req.session.destroy(function(err) {
          if(err) {
            return next(err);
          } else {
            delete req.session;
            console.log(req.session);
            return res.redirect('/');
          }
        });

        
    }
    
  
});



module.exports = router;
