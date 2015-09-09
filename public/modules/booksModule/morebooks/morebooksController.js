angular.module('morebooksModule',[]).controller('moreBooksController',['$scope','getJsonBooks', function($scope,getJsonBooks){
    $scope.images;    
    $scope.selectedBook = 'all'
    $scope.pageLength = '10';
    $scope.currentPage = 0;
    $scope.pagNoArray = [];    


    getJsonBooks.moreBooks().then(function (response){
        $scope.images = response.data;
        for(var i = 0;i< Math.ceil($scope.images.length/$scope.pageLength);i++)
        {
            $scope.pagNoArray[i] = i+1;
        }
    });


    $scope.fun = function(search)
    {
        if($scope.selectedBook === 'all')
            $scope.criteria = {$:search};
        else if($scope.selectedBook === 'title')
            $scope.criteria = {'title':search};
        else if($scope.selectedBook === 'genre')
            $scope.criteria = {'genre':search};
        else if($scope.selectedBook === 'author')
            $scope.criteria = {'author':search}
        else if($scope.selectedBook === 'contributor')
            $scope.criteria = {'Contributor':search};
    };


    $scope.changeInFilterText = function(search){
        $scope.currentPage = 0;
    }
}]);
