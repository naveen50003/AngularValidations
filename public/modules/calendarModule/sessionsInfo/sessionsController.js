angular.module('sessionsModule',['calendarModule','tableViewModule'])
.controller('sessionsController', ['$rootScope','$scope','$location','$stateParams','getJsonSessions','$localStorage','$state', function ($rootScope,$scope,$location,$stateParams,getJsonSessions,$localStorage,$state) {
    $scope.calendar=true;
    $scope.table=false;

	$scope.isActive = function(route) {
        return route === $location.path();
    }
    $scope.onClickCalendar = function () {
        $scope.calendar=true;
        $scope.table=false;
    }
    $scope.onClickTable = function () {
        $scope.calendar=false;
        $scope.table=true;
    }


    $scope.currSession = $stateParams.sessionId;
    $scope.sessionDes = {};

    getJsonSessions.getJsonSessionsData().success(function (response) {
      console.log(response);
        $rootScope.sessionValues = response;
            for(var i=0; i<$scope.sessionValues.length;i++){
            if($scope.currSession === $scope.sessionValues[i]._id.toString()){
             $scope.sessionDes = $scope.sessionValues[i];
             $rootScope.sessIdValue = $scope.sessionValues[i]._id;
            }
        }
    });

    $scope.registerEvent = function(){
        //alert("Hi");
        $scope.userId = $localStorage.sess.username;
        console.log($scope.userId);
        //$scope.sessionsId = $rootScope.sessIdValue;
        console.log($rootScope.sessIdValue);

        var idDetails = {
            sessionId : $rootScope.sessIdValue,
            userId : $scope.userId
        }
        getJsonSessions.registerForEvent(idDetails);

        getJsonSessions.registerForEvent(idDetails).success(function (data){
           if(data){
                $state.go('tableView');
            } else{
                $state.go('sessionDetails',{sessionId : $rootScope.sessIdValue});
            }

    });
    }

}])

.controller('newSessionController',['$scope','getJsonSessions','$state',function($scope,getJsonSessions,$state){
   $scope.addEvent = function(newSession){
        console.log($scope.newSession);
        alert("add session fun");
        var res = getJsonSessions.addSessionServices(newSession);
        alert("after res");
        res.success(function (response) {
            alert("add session fun success");
                $state.go('calendarTemplate');

        });


    };
    $scope.popup = false;
   $scope.date = function(){
        $scope.popup =  !($scope.popup);

   };
}]);
