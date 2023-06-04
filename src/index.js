const express = require('express');
const usersRoutes = require('./routes/users.js');
const middlewareLogRequest = require('./middleware/logs.js');
const mysql = require('mysql2');

const app = express();
const PORT = 8000;

app.use(express.json());

// middleware that is specific to this router
app.use(middlewareLogRequest);

const dbPool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'expressjs_mysql'
});

// app.METHOD(PATH, HANDLER)
app.use('/users', usersRoutes);

app.use('/', (req, res) => {
    dbPool.execute('SELECT * FROM users', (err, rows) => {
        if(err) {
            res.json({
                message: 'Connection failed'
            })
        }

        res.json({
            message: 'Connection succes',
            data: rows
        })
    })
});

app.listen(PORT, () => {
    console.log(`Server berhasil di running di PORT: ${PORT}`);
})