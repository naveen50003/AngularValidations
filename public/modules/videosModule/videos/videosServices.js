angular.module('videos')
.factory('getJsonVideos',['$http','$q',function($http,$q){	
	var factory = {};
	factory.getAllVideos = function(){
		return $http.get('/videos')
		.success( function (response){
			//console.log(response);
			return response;
		})
		.catch(function (err){
			return err;
		});
	}
	/*
	* delete the video
	*/
	factory.deleteTaskVideo=function(id){
          console.log(id);
          return $http.delete('/deleteTaskVideo/'+id)
          .then(function (response){
                    if(typeof response.data === 'object'){
                        return response.data;
                    }
                    else{
                      return $q.reject(response.data);
                    }
                  }, function (response){
                    return $q.reject(response.data);
                  });
        }
	return factory;
}]);