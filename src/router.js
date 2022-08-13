const handlers = require('./handlers');

const router = (req, res) => {
  const endpoint = req.url;

  if (endpoint === '/') {
    handlers.handleHomePage(req, res);
  } else if (endpoint === '/favicon.ico') {
    handlers.handleFavicon(req, res, endpoint);
  } else if (endpoint.includes('public')) {
    handlers.handlePublicFiles(req, res, endpoint);
  } else if (endpoint.includes('/data')) {
    handlers.handleJsonFile(req, res, endpoint);
  } else {
    handlers.handleNotFoundPage(req, res);
  }
};

module.exports = router;
