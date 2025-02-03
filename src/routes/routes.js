const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Welcome to Eagle Watch API');
});

module.exports = router; // Ensure you are exporting router, not an object
