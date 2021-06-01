const express = require('express');
const router = express.Router();

const { check } = require('express-validator');

const { encode, decode } = require('../../controllers/urls');

// @route POST urls/encode
// @desc Encode long url to short url
// @access Public
router.post(
  '/encode',
  [check('longUrl', 'The long URL has to be a valid URL').isURL()],
  encode
);

// @route GET urls/decode/:code
// @desc Decode short url to original url
// @access Public
router.get('/decode/:code', decode);

module.exports = router;
