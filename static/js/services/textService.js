'use strict'
var app = angular.module('achievementApp'); 

app.service('textService', function ($http){ 
this.getData = function(){ 
return $http.get('/sendtext'); 
}; 

this.postData = function(data){ 
return $http.post('/sendtext', data); 
}; 
}); 