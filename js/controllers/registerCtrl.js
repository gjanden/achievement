angular.module('achievementApp')
 .controller('registerCtrl', function($scope, registration){

  $scope.registeredUsers = registration.get({});

		$scope.firstName = "";
		$scope.lastName = "";
		$scope.email = "";
		$scope.password = "";

		$scope.register = function(obj){
			$scope.registeredUsers.push(obj);
			registration.add(obj);

			console.log(obj);
			console.log('Register was called!');
		};

	});