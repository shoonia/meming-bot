module.exports = (req, res, next) => {
  res.set({
    'Access-Control-Allow-Origin': 'https://shoonia.wixsite.com',
    'Access-Control-Allow-Methods': 'POST',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Surrogate-Control': 'no-store',
    'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
    'Pragma': 'no-cache',
    'Expires': '0',
  });
  next();
};
