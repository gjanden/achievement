
var mongoose = require('mongoose');
var schema = mongoose.Schema;

var taskSchema = new schema({
	userId: String,
 title: String,
 category: Array,
 beginningDate: Date,
 endingDate: Date,
 days: Array,
 milestones: String,
 website: Array,
 notes: Array,
 privacy: Boolean
});

module.exports = mongoose.model('Task', taskSchema);