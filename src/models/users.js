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

const updateUser = (body, idUser) => {
    const SQLquery = ` UPDATE users
                       SET name='${body.name}', email='${body.email}', address='${body.address}'
                       WHERE id=${idUser}`;
    
    return dbPool.execute(SQLquery);
}

const deleteUser = (idUser) => {
    const SQLquery = ` DELETE FROM users WHERE id=${idUser}`;
    
    return dbPool.execute(SQLquery);
}

module.exports = {
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser
};