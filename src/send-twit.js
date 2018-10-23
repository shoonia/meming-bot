const Twit = require('twit');
const config = require('../config');

const twit = new Twit(config.twitOptions);

module.exports = (media_data, status) => new Promise((resolve, reject) => {
  twit.post('media/upload', { media_data }, (error, data) => {
    if (error) return reject(error);

    const payload = {
      media_ids: [data.media_id_string],
      status
    };

    twit.post('statuses/update', payload, (error, result) => {
      if (error) return reject(error);
      resolve(result);
    });
  });
});
