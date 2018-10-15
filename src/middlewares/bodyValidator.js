module.exports = (req, res, next) => {
  const { link, title, body } = req.body;

  if (typeof link !== 'string') {
    res.status(400).json({ error: '<link> must be a string only' });
  }

  if (typeof title !== 'string') {
    res.status(400).json({ error: '<title> must be a string only' });
  }

  if (typeof body !== 'string') {
    res.status(400).json({ error: '<body> must be a string only' });
  }

  next();
};
