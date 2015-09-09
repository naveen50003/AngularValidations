angular.module('books')

    .controller('homeBooksController', ['$scope', 'getJsonBooks', function ($scope, getJsonBooks) {
        $scope.books = [];
        $scope.images = null;
        var i = 0;

        getJsonBooks.mediaBooks().then(function (response) {
            $scope.images = response.data;
                for (i = 0; i < 16; i++) {
                    $scope.books.push($scope.images[i]);
                }
	    });
    }])
    //------------controller for more books-------------------

//-------------------books description controller----------------------
.controller('bookDescriptionController',['$scope','getJsonBooks','$state','$stateParams','taskFactoryBook','getSharedJson',function($scope,getJsonBooks,$state,$stateParams,taskFactoryBook,getSharedJson){
    $scope.currTitle = $stateParams.shareId;
    $scope.currType =  $stateParams.type;
    $scope.bookDes = {};

    getJsonBooks.books().then(function (response) {
      console.log(response.data);
        $scope.books = response.data;
            for(var i=0; i<$scope.books.length;i++){
            if($scope.currTitle === $scope.books[i]._id.toString()){
             $scope.bookDes = $scope.books[i];
            }
        }
    });

    $scope.deleteTask=function(id){
        var deleteObjInfo = {};
            deleteObjInfo.id= id,
            deleteObjInfo.type = 'books';
            console.log(getSharedJson);
        getSharedJson.deleteTask(deleteObjInfo).then(function(deleteResponse){
            console.log('delted successfully');
            $state.go('moreBooks');
        },function(deleteResponse){
            console.log('unsuccessful');
        });
    };


}]);
