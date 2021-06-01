const { check, validationResult } = require('express-validator');

exports.encode = (req, res, next) => {
  console.log(req.body);
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  res.json('Encode');
};

exports.decode = (req, res, next) => {
  res.json('Decode');
};
