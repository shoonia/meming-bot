const { isString } = require('util');
const HmacSHA512 = require('crypto-js/hmac-sha512');

const isTokenValid = (token, body) => {
  const { SECRET_KEY, PUBLIC_KEY } = process.env;

  if (!isString(PUBLIC_KEY)) {
    return false;
  }

  try {
    const json = JSON.stringify(body);
    const hash = HmacSHA512(json, (SECRET_KEY + PUBLIC_KEY));

    return token === hash.toString();
  } catch (o_0) {
    // I'm so sad!
  } finally {
    process.env.PUBLIC_KEY = undefined;
  }

  return false;
};

module.exports = (req, res, next) => {
  const token = req.get('authorization');

  if (!token) {
    return res.sendStatus(401);
  }

  if (isTokenValid(token, req.body)) {
    return next();
  }

  res.sendStatus(403);
}
