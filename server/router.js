var Auth = require('./controllers/auth'); //include the authorization controller
var User = require('./models/user'); //include the User model


module.exports = function(app){ //sets routes

	app.post('/signup', Auth.signup);

	// app.get('/', function(req, res, next){
	// 	res.send("HELLO HOMEPAGE");
	// });

	// app.get('/signup', function(req, res, next){
	// 	res.send("Hey folks, Thanks for signing up!");
	// });
};

