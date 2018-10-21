const { HmacSHA512 } = require('crypto-js');

const isTokenValid = (token, body) => {
  const { SECRET_KEY, PUBLIC_KEY } = process.env;

  if (typeof PUBLIC_KEY !== 'string') {
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

  if (token) {
    res.sendStatus(401);
    return;
  }

  if (isTokenValid(token, req.body)) {
    next();
  } else {
    res.sendStatus(403);
  }
}
