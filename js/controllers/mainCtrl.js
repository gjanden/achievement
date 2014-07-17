angular.module('MainModule', [])
	.controller('mainCtrl', ['$scope', '$http', function($scope, $http){


		$http({
			method: 'GET',
			url: '/data/task.json'
		})
	}]);