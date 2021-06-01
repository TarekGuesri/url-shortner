const express = require('express');
const router = express.Router();

// Routes
router.use('/urls', require('./rest/urls'));

module.exports = router;
