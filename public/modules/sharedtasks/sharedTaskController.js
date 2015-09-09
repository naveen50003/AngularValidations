angular.module('sharedTasksModule')
.controller("editTaskController",['$scope','getSharedJson','$state','$stateParams',function($scope,getSharedJson,$state,$stateParams){

    var id = $stateParams.shareId,
        type = $stateParams.type;
    $scope.valid = true;
    $scope.editDetails = {};
    getSharedJson.editTask(id,type).then(function (data){
        $scope.editDetails = data;
    });

    $scope.updateTask = function(editDetails, type){
        getSharedJson.updateTaskShared(editDetails,type).then(function(data){
                if(type == 'book'){
                    $state.go('bookData', { shareId:editDetails._id });
                }
                else if(type == 'video'){
                    $state.go('videosData', { shareId:editDetails._id });
                }
            }, 
            function(error){
                /*
                * Error Message come here
                */
            });
    };


    $scope.checkUrl=function(){
        var url = $(".url-field").val(),
            n=/youtube/.exec(url);
        $scope.flag=false;
        $scope.valid=true;

        if(/youtube/.test(url)==true){
            $scope.valid=true;
        }
        else{
            $scope.valid=false;
            $scope.flag=true;
        }
    };
}]);
