angular.module('morevideosModule',[]).controller('moreVideosController',['$scope','getJsonVideos', function($scope,getJsonVideos){
    $scope.images; 
    $scope.selectedVideo = 'all';
    $scope.pageLength = '10';
    $scope.currentPage = 0;
    $scope.pagNoArray = []; 

    getJsonVideos.getAllVideos().then(function (response){
        $scope.images = response.data;
        for(var i = 0;i< Math.ceil($scope.images.length/$scope.pageLength);i++)
        {
            $scope.pagNoArray[i] = i+1;
        }
    });
    $scope.fun = function(search)
    {
        if($scope.selectedVideo === 'all')
            $scope.criteria = {$:search};
        else if($scope.selectedVideo === 'title')
            $scope.criteria = {'title':search};
        else if($scope.selectedVideo === 'type')
            $scope.criteria = {'type':search};
    }
        
    
        $scope.changeInFilterText = function(search){
            $scope.currentPage = 0;
        }
}])
