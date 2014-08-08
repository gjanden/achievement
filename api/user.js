
    var mongoose = require('mongoose');
    var schema = mongoose.Schema;

    var userSchema = new schema({
        firstName: String,
        lastName: String,
        email: String,
        mobile: Number,
        password: String
    });



module.exports = mongoose.model('User', userSchema);