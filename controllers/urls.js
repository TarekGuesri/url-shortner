const { validationResult } = require('express-validator');
const shortid = require('shortid');

const Url = require('../models/Url');

exports.encode = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { longUrl } = req.body;

  let url = await Url.findOne({ longUrl });

  // If there is a short link with same longUrl, we will just send it instead of ceating another one
  if (url) {
    return res.json(url.shortUrl);
  } else {
    const urlCode = shortid.generate();

    const baseUrl = process.env.BASE_URL;

    const shortUrl = `${baseUrl}/${urlCode}`;

    // Creating model
    url = new Url({
      longUrl,
      shortUrl,
      urlCode,
    });

    await url.save();

    return res.json(url.shortUrl);
  }
};

exports.decode = async (req, res) => {
  const { code } = req.params;
  const url = await Url.findOne({ urlCode: code });

  if (!url) {
    return res.status(404).json('Link does not exist or has been deleted!');
  }

  res.json(url.longUrl);
};
