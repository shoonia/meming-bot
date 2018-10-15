const express = require('express');
const Twit = require('twit');

const { twitOptions } = require('../../config');
const authorization = require('../middlewares/authorization');
const bodyValidator = require('../middlewares/bodyValidator');

const router = express.Router();
const twit = new Twit(twitOptions);

router.post('/', bodyValidator, authorization, (req, res) => {

  // twit.post('statuses/update', { status }, (error, data, $res) => {
  //   if (error) throw error;
  //   res.status(201).json(data);
  // });
  res.status(200).json({ OMG: 'LOL' });
});

module.exports = router;
