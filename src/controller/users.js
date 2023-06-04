const getAllUsers = (req, res) => {
    const data = {
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

module.exports = {
    getAllUsers,
    createNewUser
}