const UsersModel = require('../models/users.js');

const getAllUsers = async (req, res) => {

    try {
        const [data] = await UsersModel.getAllUsers();

        res.json({
            message: 'GET all users success',
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server error',
            serverMessage: error
        })
    }
}

const createNewUser = async (req, res) => {
    const {body} = req;

    try {
        await UsersModel.createNewUser(body);
        res.json({
            message: 'CREATE new user success',
            data: body
        });
    } catch (error) {
        res.status(500).json({
            message: 'Server error',
            serverMessage: error
        });
    }
}

const updateUser = (req, res) => {
    const {idUser} = req.params;
    console.log('idUser: ', idUser);
    res.json({
        message: 'UPDATE user success',
        data: req.body
    })
}

const deleteUser = (req, res) => {
    const {idUser} = req.params;
    res.json({
        message: 'DELETE user success',
        data: {
            id: idUser,
            name: "iis istiqomah",
            email: "iisistiqomah@gmail.com"
        }
    })
}

module.exports = {
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser
}