
//Here we are loading up the express module, and storing it in a variable
//This is the way we "import" something in node.js (doesn't apply to client-side js)
var express = require("express");

var server = express();

var bodyParser = require("body-parser");

server.use(bodyParser.urlencoded({extended: false}));
server.use(express.static("pub")); //static files served up (like index.html)


server.use("/postGetData", function(req, res) { //"/test" is the URL we are associating this with.  req is the "request object" and res is the "response object".  These encapsulate the request from the HTTP client and the response that we are giving back to them.
	res.write("Hello " + req.body.person + " from a POST");
	res.end(); //ends the response.
});

server.use("/postUpdateData", function(req, res) { //"/test" is the URL we are associating this with.  req is the "request object" and res is the "response object".  These encapsulate the request from the HTTP client and the response that we are giving back to them.
	res.write("Hello " + req.body.person + " from a POST");
	res.end(); //ends the response.
});

server.listen(80, function() {
	console.log("Server is running and ready for connections...");
}); //Port 80 is for http (web server)