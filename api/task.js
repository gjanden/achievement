
var mongoose = require('mongoose');
var schema = mongoose.Schema;

var taskSchema = new schema({
	userId: String,
 title: String,
 category: String,
 beginningDate: Date,
 endingDate: Date,
 days: Array,
 milestones: {
 	milestone: String,
 	date: Date
 },
 website: String,
 reward: String,
 notes: {
 	note: String,
 	date: Date
 },
 privacy: String
});

module.exports = mongoose.model('Task', taskSchema);