angular.module('RegisterModule', [])

   .controller('profileCtrl', ['$scope', function($scope){
	$scope.firstName = "";
	$scope.lastName = "";
	$scope.email = "";
	$scope.birthdate = "";
	$scope.password = "";
	$scope.months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
	$scope.register = function(){
		console.log('Register was called!');
	}

}]);