angular.module('tableViewModule')

.controller('tableViewController', function ($scope, getJsonCalendar,ngTableParams) {
        $scope.events = [];
        $scope.eventsData = null;
        var i = 0;
   
        getJsonCalendar.success(function (response) {
            $scope.eventsData = response;
            //console.log($scope.eventsData);
            for(var i=0;i<$scope.eventsData.length;i++){
            $scope.events.push($scope.eventsData[i]);
         }
	    });

	$scope.tableParams = new ngTableParams({
        page: 1,            // show first page
        count: 10           // count per page
    }, {
        total: $scope.events.length, // length of data
        getData: function ($defer, params) {
        	console.log(params.count());
            $defer.resolve($scope.events.slice((params.page() - 1) * params.count(), params.page() * params.count()));
            //params.page()+=1;
            return $defer;
            console.log($scope.events.slice((params.page() - 1) * params.count(), params.page() * params.count()));
        }
    });

  $scope.changeInFilterText = function(search){
        $scope.currentPage = 0;
    }
	   
    });