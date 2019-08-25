const https = require('https');

module.exports = url => new Promise((resolve, reject) => {
  const handler = res => {
    const data = [];

    res.setEncoding('base64');

    res.on('data', chunk => {
      data.push(chunk);
    });

    res.on('end', () => {
      resolve(data.join(''));
    });
  };

  https.get(url, handler).on('error', reject);
});
