const http = require('http');
const fs = require('fs')


http.createServer((request, response) => {
  console.log(`Incoming request: ${request.url}`)

  if (request.url.startsWith("/static/")){
    fs.readFile(request.url.substr(1), (error, data) => {
      if (error){
        console.log("Error: file not found " + error);
        response.statusCode = 404;
        response.end();
        return;
      }

      response.end(data);
    })
    return;
  }
  response.end('Hello World\n');

}).listen(3000, "127.0.0.1", () => {
  console.log(`Server is listening on port 3000`);

});
