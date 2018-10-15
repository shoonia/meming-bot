const express = require('express');
const Twit = require('twit');

const { twitOptions } = require('../../config');
const authorization = require('../middlewares/authorization');
const bodyValidator = require('../middlewares/bodyValidator');
const twitterTemp = require('../templates/twitter');

const router = express.Router();
const twit = new Twit(twitOptions);

router.post('/', bodyValidator, authorization, (req, res) => {
  const status = twitterTemp(req.body);

  twit.post('statuses/update', { status }, (error, data) => {
    if (error) throw error;
    res.status(201).json(data);
  });
});

module.exports = router;
