module.exports = (error, req, res, next) => {
  if (error) {
    res.sendStatus(500);
  }
}
