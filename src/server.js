require('dotenv').config();

const PORT = process.env.PORT || 3000;
const http = require('http');
const router = require('./router');

const server = http.createServer(router);

server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('Server is listening on port 300');
});
