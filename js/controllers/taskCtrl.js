angular.module('achievementApp')
  .controller('taskCtrl', function($scope, $http, tasks){
			$scope.taskList = tasks.get({});

			$scope.days = [
				{name:'Monday', selected:false},
				{name:'Tuesday', selected:false},
				{name:'Wednesday', selected:false},
				{name:'Thursday', selected:false},
				{name:'Friday', selected:false},
				{name:'Saturday', selected:false},
				{name:'Sunday', selected:false}
				];

			$scope.categories = ['Physical','Mental','Spiritual','Social','Emotional','Other'];
			
			$scope.privacy = [
				{name:'Private', value:true, selected:true},
				{name:'Public', value:false, selected:false}
				];

			var show = false;
			$scope.showForm = function(){
				show = true;
			};
			$scope.hideForm = function(){
				show = false;
			};
			$scope.showButton = function(){
				return show;
			}

			// $scope.newTask = false;
			$scope.selectedTask;		
			
			$scope.addTask = function(obj){
				$scope.taskList.push(obj);
				tasks.add(obj);

				console.log(obj);
				console.log('addTask successfully called');
			};

			$scope.removeTask = function(obj){
    tasks.delete(obj);
    var index = $scope.taskList.indexOf(obj);
    console.log(index);
    $scope.taskList.splice(index,1);
    console.log('removeTask was called');
			};


			$scope.setSelectedTask = function(task){
				$scope.selectedTask = task;
			};

			$scope.isSelected = function(task){
				if($scope.selectedTask){
					return $scope.selectedTask === task;
				}
			};
			
});
