const { AES } = require('crypto-js');
const { SECRET_KEY } = require('../../config');

const isTokenValid = (token, data) => {
  const key = AES.encrypt(JSON.stringify(data), SECRET_KEY).toString();
  return token === key;
};

module.exports = (req, res, next) => {
  const auth = req.get('authorization');
  let token;

  if (auth) {
    token = auth.split(' ')[1];
  }

  if (isTokenValid(token, req.body)) {
    next();
  }

  res.status(403).json({
    error: 'Forbidden',
  });
}
