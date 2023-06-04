const getAllUsers = (req, res) => {
    const data = {
        id: "1",
        name: "iis istiqoqmah",
        email: "iisistiqomah@gmail.com",
        address: "Bekasi"
    }
    res.json({
        message: 'GET all users success',
        data: data
    })
}

const createNewUser = (req, res) => {
    res.json({
        message: 'CREATE new user success',
        data: req.body
    })
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