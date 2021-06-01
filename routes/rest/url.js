const express = require('express');
const router = express.Router();

// @route POST url/encode
// @desc Encode long url to short url
// @access Public
router.post('/encode', (req, res) => {
  res.json('Encode');
});

// @route GET url/decode/:code
// @desc Decode short url to original url
// @access Public
router.get('/decode/:code', (req, res) => {
  res.json('decode');
});

module.exports = router;
