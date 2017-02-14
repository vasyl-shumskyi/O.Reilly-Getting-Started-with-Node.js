var express = require("express");
var favicon = require("express-favicon"); // 03_10-Favicons


var app = express();

app.use("/static", express.static("static")) // 03_09-Serving Static Assets With Express

app.use(favicon(__dirname + '/static/favicon.ico')); // 03_10-Favicons


app.get("/", function  (request, response) {
  response.end("Hello World from express!\n");
})

app.get("/wes", function  (request, response) {
  response.end("Hello Wes from express!\n");
})

app.listen(3000, "127.0.0.1", () => {
  console.log(`Server is listening on port 3000`);
});
