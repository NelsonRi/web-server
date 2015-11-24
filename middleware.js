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

module.exports = middleware;