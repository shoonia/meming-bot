const express = require('express');

const authorization = require('../middlewares/authorization');
const bodyValidator = require('../middlewares/bodyValidator');
const twitterTemp = require('../templates/twitter');
const fetchImage = require('../fetch-image');
const sendTwit = require('../send-twit');

const router = express.Router();

router.post('/', bodyValidator, authorization, async (req, res) => {
  const { image } = req.body;
  const status = twitterTemp(req.body);

  try {
    const imgBase64 = await fetchImage(image);
    const data = await sendTwit(imgBase64, status);

    res.status(201).json(data);
  } catch (error) {
    res.sendStatus(500);
  }
});

module.exports = router;
