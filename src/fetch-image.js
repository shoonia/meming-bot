const https = require('https');

module.exports = url => new Promise((resolve, reject) => {
  const handler = res => {
    let data = '';

    res.setEncoding('base64');

    res.on('data', chunk => {
      data += chunk;
    });

    res.on('end', () => resolve(data));
  };

  https.get(url, handler).on('error', reject);
});
