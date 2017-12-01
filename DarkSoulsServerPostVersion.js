//Here we are loading up the express module, and storing it in a variable
//This is the way we "import" something in node.js (doesn't apply to client-side js)
var express = require("express");
var mongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/DarkSoulsData";
var server = express();
var bodyParser = require("body-parser");
var baseTypes = ["Daggers", "StraightSwords", "Greatswords", "UltraGreatswords", "Katanas"];

//We need to be working in extended mode. This will allow us to send nested objects as data, which we'll need if we're interfacing with mongodb.
server.use(bodyParser.urlencoded({extended: false}));
server.use(express.static("./pub")); //static files served up (like index.html)

//If we're listing data we want to use the type parameter. If we're searching we want to use the name parameter.
server.use("/list", function(req, res) {
        console.log(req.body.type);
	mongoClient.connect(url, function(err, db) {
		if (err) throw err;
		db.collection('Daggers', function(err, collection) {
			if (err) throw err;
			collection.find({}, function(err, cursor) {
				if (err) throw err;
				cursor.each(function(err, item) {
				if (err || ! item) {
					if (err) throw err;
					db.close();
				}
				});
			});
		});
	});
	res.end(); //ends the response.
});

server.use("/search", function(req, res) {
	 mongoClient.connect(url, function(err, db) {
		if (err) throw err;
		db.collection("weapons", function(err, collection) {
			collection.find({name : req.body.name}, function(err, cursor) {
				cursor.each(function(item) {
					console.log(item);
					res.end(item);
				});
			});
		});
	});
	res.end();
});

server.listen(8080, function() {
	console.log("Server is running and ready for connections...");
}); //Port 80 is for http (web server)
