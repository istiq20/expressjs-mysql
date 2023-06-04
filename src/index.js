const express = require('express');

const app = express();

const PORT = 8000;

// app.METHOD(PATH, HANDLER)
app.get('/', (req, res) => {
    res.send('Hello GET method');
});

app.post('/', (req, res) => {
    res.send('Hello POST method');
});

app.listen(PORT, () => {
    console.log(`Server berhasil di running di PORT: ${PORT}`);
})