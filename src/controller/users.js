const getAllUsers = (req, res) => {
    res.json({
        message: 'GET all users success'
    })
}

const createNewUser = (req, res) => {
    res.json({
        message: 'CREATE new user success',
        data: req.body
    })
}

module.exports = {
    getAllUsers,
    createNewUser
}