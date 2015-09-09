angular.module('mainApp')
.controller('navbarController',['$scope','$location','$state', function($scope,$location,$state) {
	   $scope.getClass = function(path) {
	    if ($location.path().substr(0, path.length) == path) {
	      return "active"
	    }
	}
}]);
