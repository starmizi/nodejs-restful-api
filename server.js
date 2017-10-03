// server.js
var app = require('./app');
var port = process.env.PORT || 3000;

var server = app.listen(port, '0.0.0.0', function() {
 console.log('Express server listening on port ' + port);
});
