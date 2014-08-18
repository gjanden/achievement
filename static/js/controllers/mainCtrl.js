angular.module('achievementApp')
	.controller('mainCtrl', function($scope, tasks){
		
		$scope.taskList = tasks.get({});

		$scope.days = [
			{name:'Sunday', id:'Sun'},
			{name:'Monday', id:'Mon'},
			{name:'Tuesday', id:'Tue'},
			{name:'Wednesday', id:'Wed'},
			{name:'Thursday', id:'Thurs'},
			{name:'Friday', id:'Fri'},
			{name:'Saturday', id:'Sat'},
			{name:'All', id:'All'}
			];
			
		$scope.selectedDay;	

		$scope.setSelectedDay = function(day){
			$scope.selectedDay = day;
			console.log('function called')
		};

		$scope.isSelected = function(day){
			if($scope.selectedDay){
				return $scope.selectedDay === day;
			}
		};

	});