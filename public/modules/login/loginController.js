
angular.module('login')
 .controller('loginController', ['$scope','$state', 'getJsonlogin','$localStorage',function ($scope,$state,getJsonlogin,$localStorage) {
 		$localStorage.sess ="";
 		$scope.uDetails= {};
 		$scope.loginStatus = false;
 		$scope.passwordStatus = false;
        $scope.clicked=true;
		$scope.validate = function(){
		var uName= loginForm.uName.value;
		var uNamelen=uName.length;
		var pwd= loginForm.pwd.value;
		var pwdLen=pwd.length;
		$scope.uDetails.uName = loginForm.uName.value;
		$scope.uDetails.pwd = loginForm.pwd.value;
		if(uNamelen==6)
		 {
		 	if(pwdLen>=8){
		 		$scope.clicked=false;
			}
		 	else{
		 		alert("please check your password--length should be more than 8 characters");
		 	}
		 }
		 else{
		 	alert("check username");
		 }
		};
		$scope.login = function(){
			$scope.uDetails.uName = loginForm.uName.value;
			$scope.uDetails.pwd = loginForm.pwd.value;
			var res = getJsonlogin.loggging($scope.uDetails);
			res.success(function (response) {
	                if(response){
	                	if(response.username){
	                		$localStorage.sess = response;
                			$state.go('calendarTemplate');
	                	}
	                	else if(response.logStatus === "out"){
	                		$scope.loginStatus = true;
	                		$scope.passwordStatus = false;
	                	}
	                	else{
	                		$scope.loginStatus = false;
	                		$scope.passwordStatus = true;
	                	}

	            }
		    });
		};

	}])


.controller('navbarController',['$scope','$location','loginController', function($scope, $location,loginController) {
	   $scope.getClass = function(path) {
	    if ($location.path().substr(0, path.length) == path) {
	      return "active"
	    }
	}
}]);
