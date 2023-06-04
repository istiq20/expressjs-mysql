require('dotenv').config();

const express = require('express');
const usersRoutes = require('./routes/users.js');
const middlewareLogRequest = require('./middleware/logs.js');
const upload = require('./middleware/multer.js');

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use('/assets', express.static('public/images'));

// middleware that is specific to this router
app.use(middlewareLogRequest);

// app.METHOD(PATH, HANDLER)
app.use('/users', usersRoutes);
app.post('/upload', upload.single('photo'), (req, res) => {
    res.json({
        message: 'Upload succes'
    })
});

app.use((err, req, res, next) => {
    res.json({
        message: err.message
    });
})

app.listen(PORT, () => {
    console.log(`Server berhasil di running di PORT: ${PORT}`);
})