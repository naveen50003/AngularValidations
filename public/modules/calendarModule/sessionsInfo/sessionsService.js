angular.module('sessionsModule')
.factory('getJsonSessions',['$http',function($http){
	
	var factory = {};

	factory.getJsonSessionsData = function (sessionData) {
		return $http.get('/sessions');
	},

	factory.registerForEvent = function (idDetails){
		console.log(idDetails);
		return $http.post('/register',{idDetails : idDetails});
	},
	
	

	factory.addSessionServices = function(newSession){
		console.log("from addBookService fun");
		return $http.post('/newSession',newSession);
	}
	return factory;
}]);