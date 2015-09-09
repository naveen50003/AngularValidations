angular.module('addBookModule', []).

controller('UploadCtrl', ['$scope', 'getJsonAddBook','$state',function ($scope,$state,getJsonAddBook) {
   $scope.flag=false;

    $scope.checkExt=function(){
    	var file = $('.book-cover')[0].files[0];
		if(file){
		  console.log(file.name);
		  var t=file.name;
		  var tArr=t.split(".");
		  var check=tArr[tArr.length-1];
		  console.log(check);
		  if(check==="png"||check==="jpg"||check==="gif"||check==="jpeg"){
		  	$scope.valid=true;
		  }
		  
		  else{
		  	//alert("Not an image");
		  	$scope.valid=false;
		  	$scope.flag=true;
		  }
		  console.log($scope.valid);
		}
    };

    $scope.addBook=function(){
    	alert("add book fun");
    	var res = getJsonAddBook.addBookServices();
    	alert("after res");
    	res.success(function (response) {
    		alert("add book fun success");
    		if(response.bookUploaded==='yes'){
    			$state.go('moreBooks');

    		}
    		else{
    			$state.go('addBook');
    		}

    	});


    };
}]);