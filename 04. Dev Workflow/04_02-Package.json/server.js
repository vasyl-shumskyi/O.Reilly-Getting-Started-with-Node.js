const http = require('http');
//const serveStaticAsset = require("./static.js").serveStaticAsset;
//const canHandleRequest = require("./static.js").canHandleRequest;
const static = require("./static.js");

http.createServer(function webRequestHandler (request, response) {
  debugger;

  console.log(`Incoming request: ${request.url}`)

//if (canHandleRequest(request)){
  if (static.canHandleRequest(request)){
//  serveStaticAsset(request, response);
    static.serveStaticAsset(request, response);

    return;
  }
  response.end('Hello World\n');

}).listen(3000, "127.0.0.1", () => {
  console.log(`Server is listening on port 3000`);

});
