const express = require('express');
const nanoid = require('nanoid');

const router = express.Router();

router.post('/', (req, res) => {
  const publicKey = nanoid();

  process.env.PUBLIC_KEY = publicKey;
  res.status(200).json({ publicKey });
});

module.exports = router;
