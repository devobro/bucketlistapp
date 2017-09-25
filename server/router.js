var Auth = require('./controllers/auth'); //include the authorization controller
var BucketList = require('./controllers/bucketlistcontroller');
var passportService = require('./services/passport');
var passport = require('passport');
var requireAuth = passport.authenticate('jwt', {session: false});
var requireSignin = passport.authenticate('local', {session: false});

// var User = require('./models/user'); //include the User model


module.exports = function(app){ //sets routes

	// app.get('/', requireAuth, function(req,res){
	// 	res.send({message: 'hey'});
	// });

	app.post('/signup', Auth.signup);
	app.post('/signin', requireSignin, Auth.signin);
	app.post('/newitem', requireAuth, BucketList.addBucketList);
	app.get('/items', requireAuth, BucketList.fetchBucketLists);
	app.get('/items/:id', requireAuth, BucketList.fetchBucketList);
	app.put('/items/:id', requireAuth, BucketList.updateBucketList);
	app.delete('/items/:id', requireAuth, BucketList.deleteBucketList);
};