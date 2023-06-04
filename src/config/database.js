const mysql = require('mysql2');
const dbPool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'expressjs_mysql'
});

module.exports = dbPool.promise();