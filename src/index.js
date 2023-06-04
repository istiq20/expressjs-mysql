const express = require('express');
const usersRoutes = require('./routes/users.js');

const app = express();

const PORT = 8000;

// middleware that is specific to this router
app.use('/', (req, res, next) => {
    console.log('Log terjadi request ke API ini');
    next();
});

// app.METHOD(PATH, HANDLER)
app.use('/users', usersRoutes);

app.listen(PORT, () => {
    console.log(`Server berhasil di running di PORT: ${PORT}`);
})