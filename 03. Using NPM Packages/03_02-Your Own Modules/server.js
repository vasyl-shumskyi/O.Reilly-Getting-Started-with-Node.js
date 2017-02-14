const http = require('http');
const serveStaticContent = require("./static.js");


http.createServer((request, response) => {
  debugger;

  console.log(`Incoming request: ${request.url}`)

  if (request.url.startsWith("/static/")){

    serveStaticContent(request, response);
    return;
  }
  response.end('Hello World\n');

}).listen(3000, "127.0.0.1", () => {
  console.log(`Server is listening on port 3000`);

});
