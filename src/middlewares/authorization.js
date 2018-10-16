const { HmacSHA512 } = require('crypto-js');
const { SECRET_KEY } = require('../../config');

const isTokenValid = (token, body) => {
  if (token === undefined) {
    return false;
  }

  try {
    const json = JSON.stringify(body);
    const hash = HmacSHA512(json, (SECRET_KEY + process.env.PUBLIC_KEY));
    return token === hash.toString();
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
