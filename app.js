var mongoose = require('mongoose');
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var app = express();

app.use(bodyParser.json());

app.use(cors());

app.use(express.static(__dirname + '/static'));

var mongoUri = process.env.MONGOLAB_URI ||
  process.env.MONGOHQ_URL ||
  'mongodb://localhost/achievement';
mongoose.connect(mongoUri);

var api = require('./api/api.js');

//User endpoints
app.get('/users', api.getUser);
app.post('/users', api.postUser);
app.delete('/users/:_id', api.deleteUser);

// Task endpoints
app.get('/tasks', api.getTask);
app.post('/tasks', api.postTask);
app.delete('/tasks/:_id', api.deleteTask);

// Texts

app.post('/sendtext', api.sendText);


app.listen(process.env.PORT || 3000, function(){
    console.log('connected!');
});