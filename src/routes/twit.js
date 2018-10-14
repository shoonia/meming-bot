const express = require('express');
const Twit = require('twit');

const { twitOptions } = require('../../config');
const router = express.Router();
const twit = new Twit(twitOptions);

router.post('/', (req, res) => {
  const { status } = req.body;

  if (typeof status !== 'string') {
    const error = new Error('<status> must be string only');
    error.code = 1;
    throw error;
  }

  twit.post('statuses/update', { status }, (error, data, $res) => {
    if (error) throw error;
    res.status(201).json(data);
  });
});

module.exports = router;
