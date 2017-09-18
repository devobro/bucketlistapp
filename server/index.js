var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
var app = express();
var port = process.env.PORT || 3000;
var server = http.createServer(app);
var router = require('./router');

app.use(bodyParser.json({type: '*/*'}));
router(app);



server.listen(port);
console.log('Server listening on ' + port);
