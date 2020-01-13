const  mysql      = require('mysql');

const db= mysql.createConnection({
  	host     : 'localhost',
  	user     : 'root',
  	password : '',
  	database : 'foodappppl',
});


const dbConnection = db.connect((err)=>{
    if(err){
        throw err;
    }
    console.log("Mysql connection")
})

module.exports = db;