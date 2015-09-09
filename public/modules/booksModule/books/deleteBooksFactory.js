angular.module('books').factory("taskFactoryBook",function($http,$q){
        console.log("task factory");
        var factory={};
        //  factory.deleteTaskBook=function(id){
        //   console.log(id);
        //   return $http.delete('/deletetaskbook/'+id)
        //   .then(function (response){
        //             if(typeof response.data === 'object'){

        //                 return response.data;
        //             }
        //             else{

        //               return $q.reject(response.data);
        //             }
        //           }, function (response){

        //             return $q.reject(response.data);
        //           });
        // }
        return factory;
   });