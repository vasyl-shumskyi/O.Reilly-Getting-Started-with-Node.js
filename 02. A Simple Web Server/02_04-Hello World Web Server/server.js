const http = require('http');


http.createServer((request, response) => {

  response.end('Hello World\n');

}).listen(3000, "127.0.0.1", () => {
  console.log(`Server is listening on port 3000`);

});
