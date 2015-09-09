angular.module('videos')

    .controller('homeVideosController', ['$scope', 'getJsonVideos', function ($scope, getJsonVideos) {
        $scope.videos = [];
        $scope.thumbnails = null;
        var i = 0;
        getJsonVideos.getAllVideos().then(function (response) {
            console.log(response);
            $scope.thumbnails = response.data;
                for (i = 0; i < 12; i++) {
                    $scope.videos.push($scope.thumbnails[i]);
                }
	    });
    }])
//-------------------videos description controller----------------------
.controller('videoController',['$scope','getJsonVideos','$stateParams','$state',function($scope,getJsonVideos,$stateParams,taskFactoryVideo,$state){
    $scope.currTitle = $stateParams.shareId;
    $scope.videoDes = {};
    getJsonVideos.getAllVideos().then(function (response) {
        $scope.videos = response.data;
            for(var i=0; i<$scope.videos.length;i++){
            if($scope.currTitle === $scope.videos[i]._id.toString()){
             $scope.videoDes = $scope.videos[i];
            }
        }
    });
    $scope.deleteVideo=function(id){
        console.log(id);
       getJsonVideos.deleteTaskVideo(id).then(function(data){
                $state.go('moreVideos');
            }, function(error){
                // $state.go('moreVideos');
            });
    };


}]);
