const dbPool = require('../config/database.js');

const getAllUsers = () => {
    const SQLquery = 'SELECT * FROM users';
    
    return dbPool.execute(SQLquery);
}

const createNewUser = (body) => {
    const SQLquery = ` INSERT INTO users (name, email, address)
                       VALUES ('${body.name}', '${body.email}', '${body.address}')`;
    
    return dbPool.execute(SQLquery);
}

module.exports = {
    getAllUsers,
    createNewUser
};