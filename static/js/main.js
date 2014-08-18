var app = angular.module('achievementApp', ['ngRoute', 'ngResource']);

app.config(function($routeProvider){
	$routeProvider.when('/', {
		templateUrl: 'templates/main2.html',
		controller: 'mainCtrl'
	})
	.when('/tasks', {
		templateUrl: 'templates/task.html',
		controller: 'taskCt''(${$.:(rl'
	})
	.when('/achievements', {
		templateUrl: 'templates/achievements.html',
		controller: 'achievementCtrl'
	})
	.when('/profile', {
		templateUrl: 'templates/profile.html',
		controller: 'profileCtrl'
	})
	.when('/settings' , {
		templateUrl: 'templates/settings.html',
		controller: 'settingsCtrl'
	})	
	.when('/register', {
		templateUrl: 'templates/register.html',
		controller: 'registerCtrl'
	})
	.otherwise({ redirectTo: '/' });
});