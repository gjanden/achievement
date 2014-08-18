'use strict';
 angular.module('achievementApp').factory('registration', function($resource){
  return $resource('/users/:_id',{_id: '@_id'},{
   get: {method:'GET', isArray: true},
   add: {method:'POST'},
   delete: {method: 'DELETE'}
  });
});
