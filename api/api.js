var User = require('../API/user.js');
var Task = require('../API/task.js');
var twilio = require('twilio');
var client = new twilio.RestClient('AC7902c7568d763bc50ad0628166dcf86b', 'f88bbab8636f014b91dbfcc3ef76301f');
//Users
exports.getUser = function(req, res){
	User.find({}, function(err, users){
		if(err){
			res.send('Something\'s wrong here!');
		}
		res.send(users);
	});
};

exports.postUser = function(req, res){
	if(req.body){
		console.log(req.body);
		var users = new User(req.body);
		users.save(function(err, users){
			if(err){
				res.send('He\'s lost. Yep...gonner.');
			}
			res.send(users);
		});
	}
};

exports.deleteUser = function(req, res){
	var _id = req.params._id;
console.log(_id);
	User.remove({_id:_id}, function(err, _id){
		res.send(_id + ' removed user successfully');
		if(err){
			res.send('Hey guys...he is still here.');
		}
	});
};

//Tasks
exports.getTask = function(req, res){
	Task.find({}, function(err, tasks){
		if(err){
			res.send('Task not found');
		}
		res.send(tasks);
	});
};

exports.postTask = function(req, res){
	if(req.body){
		console.log(req.body);
		var tasks = new Task(req.body);
		tasks.save(function(err, tasks){
			if(err){
				res.send('He\'s lost. Yep...gonner.');
			}
			res.send(tasks);
		});
	}
};

exports.deleteTask = function(req, res){

	var _id = req.params._id;

	Task.remove({_id:_id}, function(err, task){
		res.send(task + ' removed task successfully');
		if(err){
			res.send('Hey guys...he is still here.');
		}
	});
};

exports.sendText = function(req, res){
	client.sendSms({
    to:'18018855902',
    from:'18018511925',
    body:'ahoy hoy! Testing Twilio and node.js'
}, function(error, message) {
    if (!error) {
        console.log('Success! The SID for this SMS message is:');
        console.log(message.sid);
        console.log('Message sent on:');
        console.log(message.dateCreated);
    } else {
        console.log('Oops! There was an error.');
    }
   })
	};
