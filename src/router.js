const handlers = require('./handlers');

const router = (req, res) => {
  const endpoint = req.url;
  if (endpoint === '/') {
    handlers.handleHomePage(req, res);
  } else if (endpoint.includes('public')) {
    handlers.handlePublicFiles(req, res, endpoint);
  } else if (endpoint.includes('/data')) {
    handlers.handleJsonFile(req, res, endpoint);
  }
  // else if (endpoint.includes('search')) {

  // }
  else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('<h1>page not found</h1>');
  }
};

module.exports = router;
