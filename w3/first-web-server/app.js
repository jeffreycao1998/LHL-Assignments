const http = require("http");
const PORT = 8080;

// a function which handles requests and sends response
const requestHandler = function(request, response) {
  if (request.url === '/pathOne') {
    response.end('pathOne');
  }
  if (request.url === '/pathTwo') {
    response.end('pathTwo');
  }
  response.end('404 Page Not Found')
};

const server = http.createServer(requestHandler);

server.listen(PORT, () => {
  console.log(`Server listening on: http://localhost:${PORT}`);
});