angular.module('calendarModule')
.factory('getJsonCalendar',['$http',function($http){	
	return $http.get('/sessions');
}]);