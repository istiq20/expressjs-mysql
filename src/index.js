require('dotenv').config();

const express = require('express');
const usersRoutes = require('./routes/users.js');
const middlewareLogRequest = require('./middleware/logs.js');

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

// middleware that is specific to this router
app.use(middlewareLogRequest);

// app.METHOD(PATH, HANDLER)
app.use('/users', usersRoutes);

app.listen(PORT, () => {
    console.log(`Server berhasil di running di PORT: ${PORT}`);
})