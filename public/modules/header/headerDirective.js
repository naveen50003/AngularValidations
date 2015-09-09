angular.module('headerModule',[]).directive('cigyanHeader',function(){
    return{
        restirct:'AE',
        templateUrl:'modules/header/templates/header.html',
        replace:true,
        link: function(){
        	
        },
    }
})
.controller('ExampleController', ['$scope','$state','$localStorage','getJsonlogin','$location', '$rootScope',function($scope,$state,$localStorage,getJsonlogin,$location, $rootScope) {

	$scope.userid = $localStorage.sess.username;
  $scope.email = $localStorage.sess.email;
  $scope.designation = $localStorage.sess.designation;
  $scope.name = $localStorage.sess.name;
  
	$scope.open=false;
	
	window.onClick=function(){
		
	}
	
	$scope.logout = function(){
		$localStorage.sess = "";
		var res = getJsonlogin.logedout();
		res.success(function(response) {
			if(response && response.logStatus == "logout")
			{
				$state.go("login");
			}
	    });
	}
 
}])
    .controller('MenuCtrl', ['$scope', '$location', '$rootScope',function($scope, $location, $rootScope) {

$scope.menuOpened = false;
$scope.open=false;

$scope.toggle = function(event) {
			$scope.open=!($scope.open);
			$scope.menuOpened =false;
			 event.stopPropagation();
		}
		
  $scope.toggleMenu = function(event) {
      $scope.menuOpened = !($scope.menuOpened);
      event.stopPropagation();
  };

     window.onclick = function() {
          if ($scope.menuOpened) {
              $scope.menuOpened = false;

        // You should let angular know about the update that you have made, so that it can refresh the UI
              $scope.$apply();
          }
		  if ($scope.open) {
              $scope.open = false;

        // You should let angular know about the update that you have made, so that it can refresh the UI
              $scope.$apply();
          }
      };

  }
]);	
