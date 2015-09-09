console.log("hi");
angular.module('addBookModule')
.service('getJsonAddBook',['$http',function($http){	
	//console.log("from add book service");
	this.addBookServices = function(){
		console.log("from addBookService fun");
		return $http.post('/newBook');
	}
}]);