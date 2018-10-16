const { HmacSHA512 } = require('crypto-js');

const isTokenValid = (token, body) => {
  const { SECRET_KEY, PUBLIC_KEY } = process.env;

  if (token === undefined || typeof PUBLIC_KEY !== 'string') {
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
