module.exports = (error, req, res, next) => {
  if (error) {

    if (error.code === 1) {
      res.status(400).json({
        error: error.message,
      });
      return;
    }

    res.status(500).json({
      error: error.message || 'Something went wrong',
    });
    return;
  }
}
