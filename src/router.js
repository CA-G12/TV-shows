const handlers = require('./handlers')
const router = (req, res) => {
  const endpoint = req.url;
  if(endpoint === "/") {

  }

  else if (endpoint === "/data") {

  }

  else if (endpoint.includes("search")) {

  }


  else {
    res.writeHead(404, {"Content-Type" : "text/html"});
    res.end("<h1>page not found</h1>")
  }
}

module.exports = router;

