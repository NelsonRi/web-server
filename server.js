var express = require('express');
var app = express();
var PORT = 3000;

var middleware = {
	requireAuthentication: function (req, res, next) {
		console.log('Private Route Hit!');
		next();
	},
	logger: function (req, res, next) {
		console.log('Request: '+ new Date().toString() +'  '+ req.method +'\t'+ req.originalUrl );
		next();
	} 
};

// app.use(middleware.requireAuthentication);

app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, function (request, response) {
	response.send('About Me!');
});

app.use(express.static(__dirname+'/public'));

app.listen(PORT, function () {
	console.log('Express Server Started!\n'+ 'Running on Port: ' +PORT+ '...');
});

/* Get, Put, Patch, Delete */