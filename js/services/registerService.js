'use strict';
 angular.module('achievementApp').factory('registration', function($resource){
  return $resource('http://localhost:3000/users/:_id',{_id: '@_id'},{
   get: {method:'GET', isArray: true},
   add: {method:'POST'},
   delete: {method: 'DELETE'}
  });
});
