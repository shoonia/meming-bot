const isString = (...props) =>
  props.every(prop => typeof prop === 'string');

module.exports = (req, res, next) => {
  const { link, title, body, image } = req.body;

  if (isString(link, title, body, image)) {
    next();
  } else {
    res.sendStatus(400);
  }
}
