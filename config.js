if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

module.exports = {
  twitOptions: {
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token: process.env.TWITTER_ACCESS_TOKEN,
    access_token_secret: process.env.TWITTER_ACCESS_SECRET,
    timeout_ms: 60 * 1000,
    // strictSSL: true,
  },
  PORT: process.env.PORT,
};
