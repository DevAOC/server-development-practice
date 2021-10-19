"use strict";

module.exports = (req, res) => {
  const words = req.body.words || req.query.words;
  res.send(words);
};
