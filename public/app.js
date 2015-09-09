angular.module('mainApp',['ui.router','login','books','headerModule','mediaModule','morebooksModule','paginationModule','videos','morevideosModule','addBookModule','sessionsModule','ngResource','morevideosModule','homeModule','tableViewModule','ngStorage','addVideosModule'])


/*configuring states*/
.config(['$stateProvider','$urlRouterProvider','$locationProvider',function($stateProvider, $urlRouterProvider,$locationProvider){
    $stateProvider
		 .state('login',{
            url:'/login',
            templateUrl:'modules/login/templates/login.html',
            controller:'loginController',
            data : { pageTitle: '' }
        })

        .state('home',{
            url:'/home',
            templateUrl:'modules/home/templates/home.html',
            controller:'homeBooksController'
        })
        .state('books',{
	       url:'/books',
	       templateUrl:'modules/booksModule/books/templates/book.html',
           controller:'homeBooksController',
	      data : { pageTitle: ' | Books' },
            parent:'home'
        })
        .state('moreBooks',{
            url:'/books/moreBooks',
            templateUrl:'modules/booksModule/morebooks/templates/moreBooks.html',
            controller:'moreBooksController',
			data : { pageTitle: ' | moreBooks' },
            parent:'home'
        })
        .state('bookData',{
            url:'/books/:shareId',
            templateUrl:'modules/booksModule/books/templates/bookData.html',
            controller:'bookDescriptionController',
            data : { pageTitle: ' | Book Description' },
            parent:'home'
        })
        .state('addBook',{
            url:'/books/new/addBook',
            templateUrl:'modules/booksModule/addbook/templates/addBook.html',
            controller:'UploadCtrl',
            data : { pageTitle: ' | Add New Book'},
            parent:'home'
        })
        .state('editBook',{
            url:'/editBook/:shareId/:type',
            templateUrl:'modules/booksModule/books/templates/editBook.html',
            controller:'editTaskController',
            parent:'home'
         })


        .state('videos',{
            url:'/videos',
            templateUrl:'modules/videosModule/videos/templates/videos.html',
			controller:'homeVideosController',
			data : { pageTitle: ' | videos' },
            parent:'home'
        })
        .state('editVideo',{
            url:'/editVideo/:shareId/:type',
            templateUrl:'modules/videosModule/videos/templates/editVideo.html',
            controller:'editTaskController',
            parent:'home'
         })
        .state('moreVideos',{
                url:'/videos/moreVideos',
                templateUrl:'modules/videosModule/morevideos/templates/morevideos.html',
                controller:'moreVideosController',
                data : { pageTitle: ' | explore Videos' },
                parent:'home'
             })
        .state('videosData',{
            url:'/videos/:shareId',
            templateUrl:'modules/videosModule/videos/templates/videosData.html',
            controller:'videoController',
            data : { pageTitle: ' | Video Description'},
            parent:'home'
         })

        .state('addvideo',{
            url:'/videos/new/addvideo',
            templateUrl:'modules/videosModule/addVideo/templates/addvideo.html',
            controller:'addvideoController',
            data : { pageTitle: ' | Add New Video'},
            parent:'home'
        })

        .state('calender',{
            url:'/calender',
            templateUrl:"modules/calendarModule/calendar/templates/calendar.html ",
			data : { pageTitle: ' | Session calendar' },
            parent:'home'
        })
        .state('calendarTemplate',{
            url:'/myCalendar',
            templateUrl:"modules/calendarModule/calendar/templates/calendarTemplate.html ",
            controller:'calendarController',
            data : { pageTitle: ' | Session calendar' },
            parent:'calender'
        })
        .state('tableView',{
            url:'/tableView',
            templateUrl:'modules/calendarModule/tableView/templates/tableView.html',
            controller:'tableViewController',
            data : { pageTitle: ' | calendarTableView'},
            parent:'calender'
        })
        .state('addSession',{
            url:'/addSession',
            templateUrl:'modules/calendarModule/sessionsInfo/templates/addSession.html',
            data : { pageTitle:'add new Session' },
            controller:'newSessionController',
            parent:'calender'
        })
        .state('sessionUserInfo',{
            url:'/sessionUserInfo',
            templateUrl:'modules/calendarModule/calendar/templates/sessionsUserInfo.html',
            data : { pageTitle: ' | Sessions User Details' },
            controller:'',
            parent:'calendar'
        })
        .state('sessionDetails',{
            url:'/calender/:sessionId',
            templateUrl:'modules/calendarModule/sessionsInfo/templates/sessionDetails.html',
            data : { pageTitle: ' | session Details' },
            controller:'sessionsController',
            parent:'home'
        });
}])

	/* load initial a view*/
.run(function($rootScope, $location,$localStorage, $state) {
    $rootScope.$state = $state;
    if($state.current.name == 'login'){
        $localStorage.sess = "";
    }
    $state.transitionTo('login');

    $rootScope.$on('$stateChangeSuccess',function(event){
        event.preventDefault();
            if(!$localStorage.sess)
            {
                event.preventDefault();
                $state.go('login');
            }
        });
});
