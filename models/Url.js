const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
  urlCode: { type: String, required: true },
  longUrl: {
    type: String,
    match: [
      /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
      'Please use a valid URL with HTTP or HTTPS',
    ],
  },
  shortUrl: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Url', urlSchema);
