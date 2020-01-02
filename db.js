const  mysql      = require('mysql');

const db= mysql.createConnection({
  host     : '153.92.8.153',
	port	 : 2082,
  	user     : 'u4354245_foodapp',
  	password : 'u4354245_foodapp',
  	database : 'u4354245_foodapp',
});


const dbConnection = db.connect((err)=>{
    if(err){
        throw err;
    }
    console.log("Mysql connection")
})

module.exports = db;