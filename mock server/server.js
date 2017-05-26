var http = require("http");
var url = require("url");

function start(route, handle) {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");


    response.writeHead(200, {"Content-Type": "text/plain"});
    var content = route(handle, pathname);
    response.write(content);
    response.end();
  }

  http.createServer(onRequest).listen(8888);
  console.log("Server has started");
}

exports.start = start;






/*
function say(word) {
  console.log(word);
}

function execute(somefun, value) {
  somefun(value);
}
// console.log("server running at http://127.0.0.1:8888/ or http://localhost:8888/");

// say("server running at http://127.0.0.1:8888/ or http://localhost:8888/");

execute(say, "Server has started at http://127.0.0.1:8888/ or http://localhost:8888/");

// execute(function (word) { console.log(word) }, "Hello");
*/


