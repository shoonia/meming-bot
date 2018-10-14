const express = require('express');
const Twit = require('twit');

const { twitOptions } = require('../../config');
const router = express.Router();
const twit = new Twit(twitOptions);

// twit.post('statuses/update', { status: 'hello world!' }, (err, data, res) => {
//   if (err) throw new Error();
//   console.log(data);
// });

router.post('/', (req, res) => {
  res.status(201).send('Hello');
});

module.exports = router;
