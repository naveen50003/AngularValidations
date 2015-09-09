angular.module('sharedTasksModule')
.factory('getSharedJson',['$http','$q',function($http,$q){
    var factory = {};
    
	factory.editTask = function(id,type){
        var factory = {},
        defered = $q.defer();
		$http.post('/editTask',{id: id, type: type}).success(function (response){
                if(typeof response === 'object'){
                    defered.resolve(response);
                }
                else{
                	return $q.reject(response);
                }
              }, function (response){
                return $q.reject(response);
              });
		return defered.promise;
	},

	factory.updateTaskShared = function(editDetails,type){
        var factory = {},
        defered = $q.defer();
		$http.post('/updateTask',{editDetails:editDetails,type:type}).success(function (response){
                if(typeof response === 'object'){
                    defered.resolve(response);
                }
                else{
                  return $q.reject(response);
                }
              }, function (response){
                return $q.reject(response);
        });
		return defered.promise;
	},

    factory.deleteTask = function(deleteDetails){
        var factory = {},
        defered = $q.defer();
    	$http.post('/deleteItem',{deleteInfo : deleteDetails}).success(function (response){
    		if(typeof response === 'object'){
    			defered.resolve(response);
    		}
    		else{
    			return $q.reject(response);
    		}
    	}, function (response){
            return $q.reject(response);
        });
        return defered.promise;
    }

	return factory;
}])
