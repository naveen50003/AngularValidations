angular.module('login')
.service('getJsonlogin',['$http',function($http){	
	this.loggging = function(uDetails){
		return $http.post('/login',{uDetails:uDetails});
	}
	this.logedout = function(){
		return $http.get('/logout');
	}
}]);