angular.module('achievementApp', [])
	.service('sharedProperties', function(){
		$scope.taskList = tasks.get({});
	})