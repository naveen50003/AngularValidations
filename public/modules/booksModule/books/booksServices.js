angular.module('books')
.factory('getJsonBooks',['$http',function($http){
	return{
		mediaBooks : function(){
			return $http.get('/mediaBooks')
			.success( function (response){
				//console.log(response);
				return response;
			})
			.catch(function (err){
				return err;
			});
		},
		moreBooks : function(){
			return $http.get('/moreBooks')
			.success( function (response){
				//console.log(response);
				return response;
			})
			.catch(function (err){
				return err;
			});
		},
		books : function(){
			return $http.get('/books')
			.success( function (response){
				//console.log(response);
				return response;
			})
			.catch(function (err){
				return err;
			});
		}

	}

}])
