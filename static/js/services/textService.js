'use strict'
var app = angular.module('achievementApp'); 

app.service('textService', function ($http){ 
this.getData = function(){ 
return $http.get('http://localhost:3000/sendtext'); 
}; 

this.postData = function(data){ 
return $http.post('http://localhost:3000/sendtext', data); 
}; 
}); 