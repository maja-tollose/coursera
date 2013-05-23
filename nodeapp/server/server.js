var sys = require("sys");
var http = require("http");

var server = http.createServer(
    function (request, response) {
        response.writeHead(200, {"content-type":"text/plain"});
        response.write("Hellow yo from AWS! And auto deployed from GIT");
        response.end();
    }
);

server.listen(8080);

sys.puts("Server is running on 8080");