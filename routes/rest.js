const express = require('express');
const router = express.Router();

// Routes
router.use('/url', require('./rest/url'));

module.exports = router;
