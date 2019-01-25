const { isString } = require('util');

const isValid = (...props) => props.every(isString);

module.exports = (req, res, next) => {
  const { link, title, body, image } = req.body;

  if (isValid(link, title, body, image)) {
    next();
  } else {
    res.sendStatus(400);
  }
}
