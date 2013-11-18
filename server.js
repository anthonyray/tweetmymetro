var express = require('express');
var http = require('http');
var io = require('socket.io');
var fs = require('fs');
var twitter = require('ntwitter');

// Web server

var app = express();
var server = http.createServer(app);

app.set('port', process.env.PORT || 80);
app.set('views', __dirname + '/views');
app.set('view engine','jade');
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);

// Connection to the Twitter Stream API

var twi = new twitter({
	consumer_key : "bZXHA5Gz2kqGxFyN9IG5w",
	consumer_secret:"glijqVU4rCS67WVLdM1bB09IZxwdVOR712adtv3P3fM",
	access_token_key:"754996698-1YV1XmZgY7fTaDoDojt6pNWKTaK4D3ZY5Mo0Odr8",
	access_token_secret:"3BAqcYkMgJwHS4ICl0ly6HiNEXHbBo5FiRRmVeOY7w"
});

// M
var file = __dirname+'/stations.json';
var stations = [];
fs.readFile(file,'utf8',function(err,data){
	if (err){
		console.log("Error :"+err);
	}
	else
	{
		stations = JSON.parse(data);
		console.log("Server read "+stations.length+" metro stations");
	}
})


twi.stream('statuses/filter',{track:'montparnasse'},function(stream){
	
	console.log("Now listening to twitter ...");
	stream.on('data',function(data){
		
		console.log(data.user.screen_name + " : " + data.text);
	});

	stream.on('end', function(response){
		// Handle a disconnection
	});

	stream.on('destroy',function(response){
		// Handle a silent disconnection from twitter
	});

	
});
