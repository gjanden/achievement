var express = require('express');

var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/achievement')

var api = require('./api.js');

app.get('/users/:type?', api.get);
app.post('/users', api.post);


// Populates #passLength select element with option values from chrNum array



app.listen(9000);