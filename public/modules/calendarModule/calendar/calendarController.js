/**
 * calendarDemoApp - 0.9.0
 */
angular.module('calendarModule')

.controller('calendarController',['$scope','$rootScope','$compile','$location','uiCalendarConfig','getJsonCalendar','$stateParams',function($scope,$rootScope,$compile,$location,uiCalendarConfig,getJsonCalendar,$stateParams){


    /* event source that contains custom events on the scope */
    $scope.events = [];
    $scope.repeatingSessions = [];
    $scope.eventSources = [$scope.events,$scope.repeatingSessions];


    /* alert on eventClick */
    $scope.onEventClick = function( date, jsEvent, view){
        console.log(date);
        console.log(date._id);
		// $location.path("/calender/3");
    };


	$scope.onDayClick = function( date, jsEvent, view){
        alert('hi');
    };


    /* add custom event*/
    $scope.addEvent = function() {
      $scope.events.push({
        title: "",
		courseCode: "",
		start:"",
		end: "",
		venue: "",
		trainer: "",
		targetAudience: ""
      });
    };


    /* Change View */
    $scope.renderCalender = function(calendar) {
      if(uiCalendarConfig.calendars[calendar]){
        uiCalendarConfig.calendars[calendar].fullCalendar('render');
      }
    };

    $scope.changeView = function(view,calendar) {
      uiCalendarConfig.calendars[calendar].fullCalendar('changeView',view);
    };
    /* config object */
    $scope.uiConfig = {
      calendar:{
        height: 570,
        editable: true,
        header:{
          left: '',
          center: 'title',
          right: 'today prev,next'
        },
		eventLimit: true, // for all non-agenda views
        eventClick: $scope.onEventClick,
		eventStartEditable:false,
		dayClick:$scope.onDayClick
      }
    };

    getJsonCalendar.success(function (response) {
		$scope.eventsArray = response;
		for(i = 0;i<$scope.eventsArray.length;i++){
			var startdate = new Date($scope.eventsArray[i].startDate);
			console.log(startdate.getMonth());
			var enddate = new Date($scope.eventsArray[i].endDate);

			var datePush,endDatePush;

			if(startdate.getTime() == enddate.getTime()){

				datePush = $scope.eventsArray[i].startDate +" "+ $scope.eventsArray[i].startTime;
				endDatePush = $scope.eventsArray[i].endDate +" "+ $scope.eventsArray[i].endTime;
				$scope.events.push({
				  title:$scope.eventsArray[i].courseName,
				  start:datePush,
				  end:endDatePush,
				  allDay:false
				});
			  }
			else if(startdate.getTime() != enddate.getTime()){
				var sessionDate = startdate.getDate();
				var sessionMonth = startdate.getMonth();
				sessionMonth = sessionMonth + 1;
				var sessionYear = startdate.getFullYear();
				for(var j = 0;j<=Math.round(enddate.getTime()-startdate.getTime())/(86400000);j++){
				    datePush = sessionYear+"-"+sessionMonth+"-"+sessionDate +" "+ $scope.eventsArray[i].startTime;
				    endDatePush = sessionYear+"-"+sessionMonth+"-"+sessionDate +" "+ $scope.eventsArray[i].endTime;
				    $scope.repeatingSessions.push({title:$scope.eventsArray[i].courseName,start:datePush,end:endDatePush,allDay:false});
					sessionDate = sessionDate + 1;
				}
			}
		}

		/* event sources array*/;
      });
    /* event sources array*/
        $scope.eventSources = [$scope.events,$scope.repeatingSessions];
    console.log($scope.eventSources);
}])

