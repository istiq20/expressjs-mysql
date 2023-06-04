const dbPool = require('../config/database.js');

const getAllUsers = () => {
    const SQLquery = 'SELECT * FROM users';
    
    return dbPool.execute(SQLquery);
}

module.exports = {
    getAllUsers
};