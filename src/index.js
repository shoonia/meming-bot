const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('../config');
const headers = require('./middlewares/headers');
const errors = require('./middlewares/errors');
const twitRouter = require('./routes/twit');

const app = express();

app.use(headers);

app.post('/heroku-wake-up', (req, res) => {
  res.sendStatus(204);
});

app.use(bodyParser.json());
app.use('/twit', twitRouter);
app.use(errors);

app.listen(PORT, () => {
  console.info('Server is running on port:', PORT);
});
