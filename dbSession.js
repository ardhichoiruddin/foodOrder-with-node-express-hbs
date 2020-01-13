

const dbSession = {
	host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'foodappppl',
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