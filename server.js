var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
var middleware = require('./middleware.js');

app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, function (request, response) {
	response.send('About Me!');
});

app.use(express.static(__dirname+'/public'));

app.listen(PORT, function () {
	console.log('Express Server Started!\n'+ 'Running on Port: ' +PORT+ '...');
});