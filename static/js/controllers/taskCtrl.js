angular.module('achievementApp')
  .controller('taskCtrl', function($scope, $http, tasks){

			$scope.taskList = tasks.get({});

			$scope.days = ['Sun','Mon','Tues','Wed','Thurs','Fri','Sat'];

			$scope.categories = ['Physical','Mental','Spiritual','Social','Emotional','Professional','Financial','Other'];
			
			$scope.privacy = ['Private','Public'];

			$scope.selectedDays = [];

			var show = false;
			$scope.showForm = function(){
				show = true;
				$scope.newTask = true;
				$scope.selectedTask = false;
			};
			$scope.hideForm = function(){
				show = false;
				$scope.newTask = false;
			};
			$scope.showButton = function(){
				return show;
			}

			// Check box functions
			$scope.toggleSelection = function(day){
	    if ($scope.selectedDays.indexOf(day) === -1) {
         $scope.selectedDays.push(day);
     } else {
         $scope.selectedDays.splice($scope.selectedDays.indexOf(day), 1);
     }
			}

			// $scope.newTask = false;
			$scope.selectedTask;		
			$scope.goal = {};

			$scope.addTask = function(obj){
				obj.days = $scope.selectedDays;
				$scope.taskList.push(obj);
				tasks.add(obj);
				$scope.newTask = false;
				$scope.hideForm();
				console.log(obj);
				console.log('addTask successfully called');
				$http({
					method: 'POST',
					url: '/sendtext',
					data: {}
				})
				$scope.task = null;
			};

			$scope.editTask = function(obj){
				console.log('editTask was called');
			};

			$scope.removeTask = function(obj){
    tasks.delete(obj);
    var index = $scope.taskList.indexOf(obj);
    $scope.taskList.splice(index,1);
    $scope.selectedTask = false;
			};

			$scope.setSelectedTask = function(task){
				$scope.selectedTask = task;
				$scope.hideForm();
			};

			$scope.isSelected = function(task){
				if($scope.selectedTask){
					return $scope.selectedTask === task;
				}
			};
		

});
