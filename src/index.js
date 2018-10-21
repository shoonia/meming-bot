const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('../config');
const headers = require('./middlewares/headers');
const errors = require('./middlewares/errors');
const twitRouter = require('./routes/twit');
const publicKeyRouter = require('./routes/public-key');

const app = express();

app.use(headers);

app.post('/heroku-wake-up', (req, res) => {
  res.sendStatus(204);
});

app.use(bodyParser.json());
app.use('/public-key', publicKeyRouter);
app.use('/twit', twitRouter);

app.get('*', (req, res) => {
  res.sendStatus(501);
});

app.use(errors);

app.listen(PORT, () => {
  console.info('Server is running on port:', PORT);
});
