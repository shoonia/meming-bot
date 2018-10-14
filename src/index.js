const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const { port } = require('../config');
const headers = require('./middlewares/headers');
const errors = require('./middlewares/errors');
const twitRouter = require('./routes/twit');

const app = express();

app.use(headers);

app.post('/heroku-wake-up', (req, res) => {
  res.sendStatus(204)
});

app.use(bodyParser.json());
app.use('/twit', twitRouter);

app.get('/*', (req, res) => {
  const indexHTML = path.resolve(__dirname, '../public/index.html');
  res.sendFile(indexHTML);
});

app.use(errors);

app.listen(port, () => {
  console.info('Server is running on port:', port);
});
