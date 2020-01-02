

const dbSession = {
	host     : '153.92.8.153',
	port	 : 2082,
  	user     : 'u4354245_foodapp',
  	password : 'u4354245_foodapp',
  	database : 'u4354245_foodapp',
	clearExpired: true,
   
    checkExpirationInterval: 900000,
    expiration: 86400000,
    createDatabaseTable: true,
    connectionLimit: 4,
    endConnectionOnClose: false,
    charset: 'utf8mb4_bin',
    schema: {
        tableName: 'sessions',
        columnNames: {
            session_id: 'session_id',
            expires: 'expires',
            data: 'data'
        }
    }
}

module.exports = dbSession;