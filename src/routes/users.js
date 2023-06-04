const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        message: "GET method success"
    });
});

router.post('/', (req, res) => {
    res.json({
        message: "POST method success"
    });
})

module.exports = router;