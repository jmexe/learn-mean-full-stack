//Home page
exports.index = function(req, res) {
	res.render('index', {title : "Welcome!"});
}

//User List
exports.userlist = function(db) {
	return function (req, res) {
		var collection = db.get("usercollection");
		collection.find({}, {}, function(err, data) {
			res.render('userlist', {
				"userlist" : data, 
				title : "User List"
			});
		});
	};
};

//Add User
exports.adduser = function(db) {
	return function(req, res) {
		//Get input submission
		var first_name = req.body.first_name;
		var last_name = req.body.last_name;
		var username = req.body.username;
		var email = req.body.email;
		var password = req.body.password;

		var collection = db.get("usercollection");

		collection.insert({
				"first_name" : first_name,
				"last_name" : last_name,
				"username" : username,
				"email" : email,
				"password" : password 
			}, function(err, data) {
				if (err) {
					res.send("An error occured when inserting the user info");
				}
				else {
					//res.location('userlist');
					res.redirect('userlist');
				}

			}
		);
	};
};

