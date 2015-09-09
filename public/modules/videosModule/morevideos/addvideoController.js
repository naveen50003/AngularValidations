angular.module('addVideosModule', [])
    .controller('addvideoController', ['$scope', '$http', function($scope, $http) {
    console.log("Hello World from controller");

    $scope.ClickMe=function(){
      alert("Hi, you clicked Submit!")
    };

    $scope.checkUrl=function(){
      var url = $(".url-field").val();
      $scope.flag=false;
      
     // console.log(url);
     // console.log(typeof(url));
       var n=/youtube/.exec(url);
       //console.log(n);
       if(/youtube/.test(url)==true){
        $scope.valid=true;
        //console.log(typeof(12));
        //console.log(valid);
       }
       else{
            //alert("Not an image");
            $scope.valid=false;
            $scope.flag=true;
          }

    }
 }]);