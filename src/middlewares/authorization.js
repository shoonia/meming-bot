const { AES, enc } = require('crypto-js');
const { SECRET_KEY } = require('../../config');

const isTokenValid = (token, body) => {
  try {
    const decryptToken = AES.decrypt(token, SECRET_KEY).toString(enc.Utf8);
    const data = JSON.parse(decryptToken);

    return Object.entries(data).every(([key, value]) => body[key] === value);
  } catch (error) { }

  return false;
};

module.exports = (req, res, next) => {
  const auth = req.get('authorization');
  let token;

  if (auth) {
    token = auth.split(' ')[1];
  }

  if (isTokenValid(token, req.body)) {
    next();
  } else {
    res.status(403).json({
      error: 'Forbidden',
    });
  }
}
